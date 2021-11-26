import React, { useEffect } from 'react'
import { useAppDispatch } from '@redux/hooks'
import { authorizeUser } from '@redux/thunks'

const AuthorizationLifecycleWrapper: React.FC = ({children}) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(authorizeUser())
  }, [])

  return <>{children}</>
}

export default AuthorizationLifecycleWrapper