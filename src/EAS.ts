import { ponder } from "@/generated";

ponder.on("EAS:Attested", async ({ event, context }) => {
  const { Attestation } = context.entities;

  // const entity = await Attestation.findUnique({
  //   id: `${event.params.uid}_${event.transaction.chainId}`,
  // });
  //
  // if (entity == null) {
  const attestation = await context.contracts.EAS.getAttestation(
    event.params.uid
  );

  await Attestation.create({
    id: `${event.params.uid}_${event.transaction.chainId}`,
    data: {
      data: attestation.data,
      time: attestation.time,
      expirationTime: attestation.expirationTime,
      revocationTime: attestation.revocationTime,
      refUID: attestation.refUID,
      txid: event.transaction.hash,
      revoked: false,
      attester: attestation.attester,
      recipient: attestation.recipient,
      schema: `${attestation.schema}_${event.transaction.chainId}`,
      chainID: event.transaction.chainId,
    },
  });

  console.log(
    `Attestation ${event.params.uid} created on chain ${event.transaction.chainId}!`
  );
  // }
});

ponder.on("EAS:Revoked", async ({ event, context }) => {
  const { Attestation } = context.entities;

  let entity = await Attestation.findUnique({
    id: `${event.params.uid}_${event.transaction.chainId}`,
  });

  if (!entity) {
    return;
  }

  await Attestation.update({
    id: `${event.params.uid}_${event.transaction.chainId}`,
    data: {
      revoked: true,
    },
  });

  console.log(`Attestation ${event.params.uid} revoked!`);
});
