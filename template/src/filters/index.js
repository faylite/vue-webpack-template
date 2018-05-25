/**
 * Filter registry, filters added here will be available globally in the app
 * by referring to the export key name defined here.
 *
 * Recommended export methods:
 * export { methodName as your_filter_name } from './yourCode'
 * export { default as your_filter_name } from './yourCode'
 *
 * i.e you can use 'your_filter_name' as usual to call on the filter in your vue html markup,
 * or alternatively from javascript code `$options.filters.your_filter_name(value, args...)`
 */

/**
 * Example filter
 */
export { filterMethod as example_filter } from './example'
{{#filters}}

/**
 * Text formatters
 */
export { capitalize as text_capitalize } from './capitalize'
export { uppercase as text_uppercase } from './uppercase'
export { lowercase as text_lowercase } from './lowercase'

/**
 * Number formatters
 */
export { round as number_round } from './number'
export { floor as number_floor } from './number'
export { fixed as number_fixed } from './number'
{{/filters}}
