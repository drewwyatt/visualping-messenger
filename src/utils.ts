export const isString = (maybe: unknown): maybe is string => typeof maybe === 'string'
export function assertIsString(
  maybe: unknown,
  variableName: string,
): asserts maybe is string {
  if (!isString(maybe)) {
    throw new Error(`Expected ${variableName} to be string. Found: ${typeof maybe}`)
  }
}
