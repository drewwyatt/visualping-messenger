import type { APIGatewayProxyHandler } from 'aws-lambda'

export const handler: APIGatewayProxyHandler = async event => {
  const eventDetails = JSON.stringify(
    {
      body: event.body,
      headers: event.headers,
      method: event.httpMethod,
      path: event.path,
      pathParameters: event.pathParameters,
      queryString: event.queryStringParameters,
    },
    null,
    2,
  )

  console.log(eventDetails)

  return {
    body: eventDetails,
    headers: {
      'Content-Type': 'application/json',
    },
    statusCode: 200,
  }
}
