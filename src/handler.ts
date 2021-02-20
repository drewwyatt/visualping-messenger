import type { APIGatewayProxyHandler } from 'aws-lambda'

export const handler: APIGatewayProxyHandler = async event => {
  return {
    body: JSON.stringify({ wow: 'neat' }),
    headers: {
      'Content-Type': 'application/json',
    },
    statusCode: 200,
  }
}
