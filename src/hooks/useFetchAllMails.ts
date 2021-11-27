import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { AuthSelectors, InboxSelectors } from '@redux/selectors'
import MailClientModule from '../modules/mailClientModule'
import { useAppDispatch } from '@redux/hooks'
import { fetchAllMails } from '@redux/thunks'

export default () => {
  const dispatch = useAppDispatch()
  const { selectAuthToken, selectEmailAddress } = AuthSelectors
  const { selectMails } = InboxSelectors

  const authToken = useSelector(selectAuthToken)
  const emailAddress = useSelector(selectEmailAddress)
  const mails = useSelector(selectMails)

  useEffect(() => {
    if(!emailAddress) return

    if(authToken) {
      MailClientModule.initializeSession(authToken, emailAddress)
      dispatch(fetchAllMails())
    }
  }, [authToken, emailAddress])

  return mails
}