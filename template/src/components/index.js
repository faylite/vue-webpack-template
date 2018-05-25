/**
 * Component registery, in main.js these component are registered for global usage.
 *
 * The components can be referenced from anywhere using their export key name.
 * So `export { default as SomeComponent }` from '@/components/ReferencedComponent' will
 * allow you to reference the component with <some-component> in the component markup from anywhere.
 *
 * Don't include single-use specific components here, import them manually instead
 */
 export { default as HelloWorld } from '@/components/HelloWorld'
