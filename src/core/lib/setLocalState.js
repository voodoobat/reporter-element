import { getLocalState } from '~/core/lib/getLocalState'

/**
 * setLocalState
 * @param state {Object} local state object
 * @param key {String} localstorage key
 * @returns {Object} state obj
 */
export const setLocalState = (state, key = 'saved_state') => {
  localStorage.setItem(key, JSON.stringify({ ...getLocalState(key), ...state }))
  return getLocalState(key)
}
