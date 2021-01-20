import { useStoreActions, useStoreState } from 'easy-peasy'
import React from 'react'
import requests from '../../services/requests'
import Logo from '../../res/images/logo.png'

function Login () {
  const { setUser, setToken } = useStoreActions(actions => actions.auth)
  const { user, token } = useStoreState(state => state.auth)

  console.log(user)

  const onClickLogin = () => {
    // Example requests
    requests.auth.login(
      {}, // payload
      (data) => {
        setUser(data?.user)// Example
        setToken(data?.token)// Example
      },
      (error) => {
        console.log(error)
      }
    )
  }

  return (
    <div>
      <form style={{ padding: 24 }}>
        <div style={{justifyContent: 'center', width: '100%', display: 'flex', paddingTop: 64 }}>
          <img src={Logo} alt='logo' width={55} height={55} />
        </div>
        <div>
          <div style={{ fontWeight: 'bold', color: '#5C5A5A', fontStyle: 'medium', fontSize: '13px' }}>
              아이디(E-mail)
          </div>
          <input type='text' style={{ marginTop: 8, padding: 12, marginRight: 0, marginLeft: 0, flex: 1 }} />
        </div>
        <button onClick={onClickLogin}>Login</button>
      </form>
    </div>
  )
}

export default Login
