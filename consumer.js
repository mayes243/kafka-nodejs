const { kafka } = require("./client");
const group = process.argv[2];

if (!group) {
  console.error("Usage: node consumer.js <GROUP_NAME>");
  process.exit(1);
}

async function init() {
  const consumer = kafka.consumer({ groupId: group, maxInFlightRequests: 1 });
  await consumer.connect();

  await consumer.subscribe({ topics: ["rider-updates"], fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log(`${group}: [${topic}]: PART:${partition}:`, message.value.toString());
    },
  });
}

init();
