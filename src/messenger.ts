import { TaskEither, right } from 'fp-ts/TaskEither'
import twilio from 'twilio'
import { MessageListInstanceCreateOptions } from 'twilio/lib/rest/api/v2010/account/message'
import { URL } from 'url'
import {
  TWILIO_AUTH_TOKEN,
  TWILIO_SID,
  TWILIO_FROM_NUMBER,
  TWILIO_TO_NUMBER,
} from './env'
import type { VisualPingNotification } from './models'

const client = twilio(TWILIO_SID, TWILIO_AUTH_TOKEN)

export const toMessage = (
  notification: VisualPingNotification,
): TaskEither<unknown, MessageListInstanceCreateOptions> => {
  let mediaUrl: string | undefined
  try {
    mediaUrl = new URL(notification.preview).href
  } catch (err: unknown) {
    console.error('Unable to set mediaUrl')
    if (err instanceof Error) {
      console.error(err.message)
    } else {
      console.error(err)
    }
  }

  return right({
    to: TWILIO_TO_NUMBER,
    from: TWILIO_FROM_NUMBER,
    mediaUrl,
    body: `VisualPing: ${notification.change} detected at ${notification.url}`,
  })
}

export const sendMessage = (message: MessageListInstanceCreateOptions) =>
  client.messages.create(message)
