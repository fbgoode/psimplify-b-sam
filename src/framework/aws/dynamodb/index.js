// With Mongo, here we would connect to the DB. With Dynamo, we just return the client

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({ region: process.env.AWS_REGION || 'eu-central-1' });
const docClient = DynamoDBDocumentClient.from(client);

export default docClient;