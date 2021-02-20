import type { APIGatewayProxyHandler } from 'aws-lambda'
import twilio from 'twilio'
import { MessageListInstanceCreateOptions } from 'twilio/lib/rest/api/v2010/account/message'
import {
  TWILIO_AUTH_TOKEN,
  TWILIO_SID,
  TWILIO_FROM_NUMBER,
  TWILIO_TO_NUMBER,
} from './env'

const client = twilio(TWILIO_SID, TWILIO_AUTH_TOKEN)

const message: MessageListInstanceCreateOptions = {
  to: TWILIO_TO_NUMBER,
  from: TWILIO_FROM_NUMBER,
  body: 'wow, neat',
}

export const handler: APIGatewayProxyHandler = async event => {
  console.log('sending message...')
  const response = await client.messages.create(message)
  console.log('sent?')
  console.log(response)

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
