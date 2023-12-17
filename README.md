# Apache Kafka

Apache Kafka is a distributed streaming platform designed for building real-time data pipelines and streaming applications. It provides a high-throughput, fault-tolerant, and scalable solution for handling real-time data feeds.

## Prerequisite

- Knowledge
  - Node.JS Intermediate level
  - Experience with designing distributed systems
- Tools
  - Node.js: [Download Node.JS](https://nodejs.org/en)
  - Docker: [Download Docker](https://www.docker.com)
  - VsCode: [Download VSCode](https://code.visualstudio.com)

## Commands

- Start Zookeper Container and expose PORT `2181`.

```bash
docker run -p 2181:2181 zookeeper
```

- Start Kafka Container, expose PORT `9092` and setup ENV variables.

```bash
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```

OR

```bash
docker-compose up -d
```

## Running Locally

- Run Multiple Consumers

```bash
node consumer.js <GROUP_NAME> or npm run consumer <GROUP_NAME>
```

- Create Producer

```bash
node producer.js or npm run producer
```

```bash
> John south
> John north
```
