import { ponder } from "@/generated";

ponder.on("SchemaRegistry:Registered", async ({ event, context }) => {
  const { Schema } = context.entities;

  let entity = await Schema.findUnique({ id: event.params.uid });

  if (entity == null) {
    const schema = await context.contracts.SchemaRegistry.getSchema(
      event.params.uid
    );

    await Schema.create({
      id: event.params.uid,
      data: {
        creator: event.transaction.from,
        schema: schema.schema,
        resolver: schema.resolver,
        time: event.block.timestamp,
        txid: event.transaction.hash,
        revocable: schema.revocable,
      },
    });

    console.log(`Attestation ${event.params.uid} created!`);
  }
});
