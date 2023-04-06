import { ponder } from "@/generated";

ponder.on("EAS:Attested", async ({ event, context }) => {
  console.log(event.params);
});

ponder.on("EAS:Revoked", async ({ event, context }) => {
  console.log(event.params);
});
