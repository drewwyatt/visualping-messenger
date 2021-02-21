import type { APIGatewayProxyHandler } from 'aws-lambda'
import { chain, fold } from 'fp-ts/TaskEither'
import { pipe } from 'fp-ts/function'

import { sendMessage, toMessage } from './messenger'
import { toVisualPingNotification } from './models'

export const handler: APIGatewayProxyHandler = async event =>
  pipe(
    toVisualPingNotification(event.body),
    chain(toMessage),
    fold(
      (err: unknown) => () => {
        if (err instanceof Error) {
          console.error(err.message)
        } else {
          console.error(err)
        }
        return Promise.resolve({
          body: JSON.stringify({
            reason: 'Invalid request',
            received: event.body,
          }),
          statusCode: 400,
        })
      },
      message => async () => {
        try {
          console.log('got message!', message)
          await sendMessage(message)
          return {
            statusCode: 200,
            body: 'it worked!',
          }
        } catch (err: unknown) {
          console.error('Error sending message.')
          if (err instanceof Error) {
            console.error(err.message)
          } else {
            console.error(err)
          }

          return {
            body: String(err),
            statusCode: 500,
          }
        }
      },
    ),
  )()
