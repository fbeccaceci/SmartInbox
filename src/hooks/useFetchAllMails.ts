import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { AuthSelectors, InboxSelectors } from '@redux/selectors'
import MailClientModule from '../modules/mailClientModule'
import { useAppDispatch } from '@redux/hooks'
import { fetchAllMails } from '@redux/thunks'

export default () => {
  const dispatch = useAppDispatch()
  const { selectAuthToken } = AuthSelectors
  const { selectMails } = InboxSelectors

  const authToken = useSelector(selectAuthToken)
  const mails = useSelector(selectMails)

  useEffect(() => {
    if(authToken) {
      MailClientModule.initializeSession(authToken, "beccaceci.fabrizio03@gmail.com")
      dispatch(fetchAllMails())
    }
  }, [authToken])

  return mails
}