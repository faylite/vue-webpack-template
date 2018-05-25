/**
 * Filter registry, filters added here will be available globally in the app
 * by referring to the export key name defined here
 */
export { default as example_filter } from './exampleFilter'
{#filters}

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
{/filters}
