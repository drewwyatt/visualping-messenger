import { assertIsString } from './utils'

assertIsString(process.env.TWILIO_AUTH_TOKEN, 'TWILIO_AUTH_TOKEN')
assertIsString(process.env.TWILIO_SID, 'TWILIO_SID')
assertIsString(process.env.TWILIO_FROM_NUMBER, 'TWILIO_FROM_NUMBER')
assertIsString(process.env.TWILIO_TO_NUMBER, 'TWILIO_TO_NUMBER')

export const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN
export const TWILIO_SID = process.env.TWILIO_SID
export const TWILIO_FROM_NUMBER = process.env.TWILIO_FROM_NUMBER
export const TWILIO_TO_NUMBER = process.env.TWILIO_TO_NUMBER
