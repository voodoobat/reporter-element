import { getGlobalCssVar } from '~/core/lib/getGlobalCssVar'

import { useMediaStore } from '~/core/store/media'

export const useGlobalMedia = () => {
  const store = useMediaStore()
  const is = (str) => matchMedia(str).matches

  const MQ_SM = getGlobalCssVar('MQ_SM', Number)
  const MQ_MD = getGlobalCssVar('MQ_MD', Number)
  // const MQ_LG = getGlobalCssVar('MQ_LG', Number)

  if (is(`(max-width: ${MQ_SM}px)`)) {
    store.mq = 'SM'
  }

  if (is(`(min-width: ${MQ_SM}px) and (max-width: ${MQ_MD - 0.2}px)`)) {
    store.mq = 'MD'
  }

  if (is(`(min-width: ${MQ_MD}px)`)) {
    store.mq = 'LG'
  }
}
