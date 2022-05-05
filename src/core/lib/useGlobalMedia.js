import { getGlobalCssVar } from '~/core/lib/util'

export const useGlobalMedia = (store) => {
  const is = (str) => matchMedia(str).matches

  const MQ_SM = getGlobalCssVar('MQ_SM', Number)
  const MQ_MD = getGlobalCssVar('MQ_MD', Number)
  // const MQ_LG = getGlobalCssVar('MQ_LG', Number)

  if (is(`(max-width: ${MQ_SM}px)`)) {
    store.mq = 'SM'
  }

  if (is(`(min-width: ${MQ_SM}px) and (max-width: ${MQ_MD - 1}px)`)) {
    store.mq = 'MD'
  }

  if (is(`(min-width: ${MQ_MD}px)`)) {
    store.mq = 'LG'
  }
}
