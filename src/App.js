import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppLoaderComponent from './components/AppLoaderComponent'
import routes from './navigations/routes'
import { useStoreRehydrated } from 'easy-peasy'
import './styles/index.css'
import AuthGuard from './containers/AuthGuard'

function App () {
  const rehydrated = useStoreRehydrated()

  if (!rehydrated) {
    return <AppLoaderComponent />
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Suspense fallback={<AppLoaderComponent />}>
          <Switch>
            {
              routes.map((route, key) => (
                route.auth
                  ? <AuthGuard chidlren={<Route key={key} {...route} />} />
                  : <Route key={key} {...route} />
              ))
            }
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
