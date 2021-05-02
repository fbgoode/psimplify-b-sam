import docClient from '../../../framework/aws/dynamodb';
import {PutCommand} from "@aws-sdk/lib-dynamodb";
const TableName = 'users';

export default async function dbGetUserById (userId) {
  return await docClient.send(
    new PutCommand({
      TableName,
      Item: {
        userId
      }
    })
  );
}