/**
 * Filter registry, filters added here will be available globally in the app
 * by referring to the export key name defined here.
 *
 * Recommended export methods:
 * export { methodName as yourFilterName } from './yourCode'
 * export { default as yourFilterName } from './yourCode'
 *
 * i.e you can use 'yourFilterName' as usual to call on the filter in your vue html markup,
 * or alternatively from javascript code `$options.filters.yourFilterName(value, args...)`
 */

/**
 * Example filter
 */
export { filterMethod as exampleFilter } from './example'
{{#filters}}

/**
 * Text formatters
 */
export { capitalize as textCapitalize } from './text'
export { uppercase as textUppercase } from './text'
export { lowercase as textLowercase } from './text'

/**
 * Number formatters
 */
export { round as numberRound } from './number'
export { floor as numberFloor } from './number'
export { fixed as numberFixed } from './number'
{{/filters}}
