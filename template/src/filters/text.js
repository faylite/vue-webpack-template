/**
 * Simple filter to capitalize the first letter in a string
 *
 * @param {String} value - String to capitalize
 * @param {Boolean} allWords - Optional, Will capitalize all words in the text string
 * @param {String} delimiter - Optional, Delimiter to split up the words with
 */
export function capitalize (value, allWords = false, delimiter = ' ') {
  if (!value) return value
  value = '' + value.toString()

  if (allWords) {
    let delimiter = delimiter || ' '
    return value
      .split(delimiter)
      .map(x => x.charAt(0).toUpperCase() + x.slice(1))
      .join(delimiter)
  } else {
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}

/**
 * Transforms all letters in the provided string to lowercase
 *
 * @param {String} value - String to lowercase
 */
export function lowercase (value) {
  if (!value) return value
  return '' + value.toString().toLowerCase()
}

/**
 * Transforms all letters in the provided string to uppercase
 *
 * @param {String} value - String to uppercase
 */
export function uppercase (value) {
  if (!value) return value
  return '' + value.toString().toUpperCase()
}

export default {
  capitalize,
  lowercase,
  uppercase
}
