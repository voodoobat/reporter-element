/**
 * getLocalState
 * @param key {String} - key in localstorage
 * @returns {Object} - saved state
 */
export const getLocalState = (key = 'saved_state') => {
  return JSON.parse(localStorage.getItem(key))
}
