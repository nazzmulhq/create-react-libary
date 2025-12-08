/**
 * Utility to merge class names
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Utility to create unique IDs
 */
let idCounter = 0;
export function uniqueId(prefix: string = 'id'): string {
  return `${prefix}-${++idCounter}`;
}
