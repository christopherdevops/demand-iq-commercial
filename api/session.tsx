import base from './base'
import { getLocalStorageItem, setLocalStorageItem } from '../utility/storage'

export const load = async () => {
  const sessionId = getLocalStorageItem('sessionId')
  return await base
    .get('api', { params: { sessionId } })
    .then((res) => {
      const sessionId = res.data
      setLocalStorageItem('sessionId', sessionId)
      base.defaults.headers.common['DIQ-COMMERCIAL-SESSION-ID'] = sessionId
    })
    .catch((err) => {
      console.log(err)
    })
}
