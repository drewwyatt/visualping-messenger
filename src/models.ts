import { pipe } from 'fp-ts/function'
import { fromEither } from 'fp-ts/lib/TaskEither'
import * as D from 'io-ts/Decoder'
// import { NotificationContext } from 'twilio/lib/rest/api/v2010/account/call/notification'

const Notification = D.type({
  /**
   * URL of the monitored site
   */
  url: D.string,

  /**
   * Description entered by the user (or automatically pulled from website)
   */
  description: D.string,

  /**
   * Timestamp without timezone
   *
   * @example "2021-02-20 22:30:25"
   */
  datetime: D.string,

  /**
   * Percent change detected
   *
   * @example "10%"
   */
  change: D.string,

  /**
   * Probably a URL
   */
  preview: D.string,

  /**
   * Probably a URL
   */
  original: D.string,
})

export const toVisualPingNotification = (str: string | null) =>
  fromEither(pipe(JSON.parse(str!), Notification.decode))

export type VisualPingNotification = D.TypeOf<typeof Notification>
