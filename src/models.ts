type VisualPingNotification = {
  /**
   * URL of the monitored site
   */
  url: string

  /**
   * Description entered by the user (or automatically pulled from website)
   */
  description: string

  /**
   * Timestamp without timezone
   *
   * @example "2021-02-20 22:30:25"
   */
  datetime: string

  /**
   * Percent change detected
   *
   * @example "10%"
   */
  change: string

  /**
   * Probably a URL
   */
  preview: string

  /**
   * Probably a URL
   */
  original: string
}
