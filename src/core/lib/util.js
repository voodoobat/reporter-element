/**
 * getGlobalCssVar
 * @param name {string}
 * @param converter {Function|StringConstructor|NumberConstructor}
 * @returns {string|number}
 */
export const getGlobalCssVar = (name, converter = String) => {
  return converter(
    getComputedStyle(document.documentElement).getPropertyValue(`--${name}`)
  )
}
