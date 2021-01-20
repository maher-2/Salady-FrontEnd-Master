import { useStoreState } from 'easy-peasy'
import React from 'react'
import { Redirect } from 'react-router-dom'

function AuthGuard ({ chidlren }) {
  const { user, token } = useStoreState(state => state.auth)

  if (!user) {
    return <Redirect to='login' />
  }

  return chidlren
}

export default AuthGuard
