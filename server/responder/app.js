// Create a DocumentClient that represents the query to add an item
const dynamodb = require('aws-sdk/clients/dynamodb');
const { v4: uuidv4 } = require('uuid');

let response;
const tableName = process.env.DATABASE_TABLE;
const docClient = new dynamodb.DocumentClient();

exports.lambdaHandler = async (event, context) => {
  console.log({event, context});
  try {
    switch(event.httpMethod) {
      case 'GET':
        const dbResponse = await docClient.scan({
          TableName: tableName,
        }).promise();

        const nameStat = {};
        const ageStat = {};

        if (dbResponse.Count > 0) {
          dbResponse.Items.forEach(item => {
            if (!nameStat[item.name]) {
              nameStat[item.name] = 0;
            }
            nameStat[item.name] = nameStat[item.name] + 1;

            if (!ageStat[item.age]) {
              ageStat[item.age] = 0;
            }
            ageStat[item.age] = ageStat[item.age] + 1;
          });
        }

        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                nameStat: nameStat,
                ageStat: ageStat,
            }),
        };
        return response;
      case 'POST':
        if (event.body) {
          try {
            const body = JSON.parse(event.body);

            if (!body.name) {
              throw new Error('name is invalidate');
            }

            if (!body.age && body.age < 1) {
              throw new Error('age is invalidate');
            }

            // Creates a new item, or replaces an old item with a new item
            // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#put-property
            var params = {
              TableName : tableName,
              Item: {
                id : uuidv4(),
                name: body.name,
                age: body.age,
              },
            };

            let result = null;

            try {
              result = await docClient.put(params).promise();
            } catch (e) {
              return response = {
                statusCode: 500,
              };
            }

            response = {
              'statusCode': 201,
              'body': JSON.stringify({
                message: {
                  name: body.name,
                  age: body.age,
                },
                result: result,
              }),
            };
            return response;
          } catch (e) {
            console.log(e);

            response = {
              statusCode: 400,
              body: {
                message: e.message,
              },
            };

            return response;
          }
        }
      default:
        response = {
          statusCode: 405,
        };

        return response;
      }
  } catch (err) {
      console.log(err);
      return err;
  }
};
