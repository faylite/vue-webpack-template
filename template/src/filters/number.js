/**
 * Rounds the provided numeric value
 *
 * @param {Number} number - Numeric value to round
 */
export function round (number) {
  if (!number || !parseFloat(number)) return number
  return parseFloat(number).round()
}

/**
 * Floors the provided number
 *
 * @param {Number} number - Numeric value to floor
 */
export function floor (number) {
  if (!number || !parseFloat(number)) return number
  return parseFloat(number).floor()
}

/**
 * Transform the numeric value to a value with specified decimal points,
 * uses 2 decimal points by default
 *
 * @param {Number} number - Number to transform
 * @param {Number} decimalPoints - (optional) Specify how many decimal points to use
 */
export function fixed(number, decimalPoints = 2) {
  if (!number || !parseFloat(number)) return number
  return parseFloat(number).toFixed(decimalPoints)
}

export default {
  round,
  floor,
  fixed
}
