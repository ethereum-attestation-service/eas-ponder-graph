import { ponder } from "@/generated";

ponder.on("SchemaRegistry:Registered", async ({ event, context }) => {
  const { Schema } = context.entities;

  // const entity = await Schema.findUnique({
  //   id: `${event.params.uid}_${event.transaction.chainId}`,
  // });
  //
  // if (entity == null) {
  const schema = await context.contracts.SchemaRegistry.getSchema(
    event.params.uid
  );

  await Schema.create({
    id: `${event.params.uid}_${event.transaction.chainId}`,
    data: {
      creator: event.transaction.from,
      schema: schema.schema,
      resolver: schema.resolver,
      time: event.block.timestamp,
      txid: event.transaction.hash,
      revocable: schema.revocable,
      chainID: event.transaction.chainId,
    },
  });

  console.log(
    `Schema ${event.params.uid} created on chain ${event.transaction.chainId}!`
  );
  // }
});
