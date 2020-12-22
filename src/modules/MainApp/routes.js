import React, { lazy } from 'react'
import { Switch } from 'react-router-dom'
import LazyRoute from './components/LazyRoute'

const LandingV1 = lazy(() => import('../LandingV1'))

function Routes () {
  return (
    <Switch>
      <LazyRoute path='/'>
        <LandingV1 />
      </LazyRoute>
    </Switch>
  )
}

export default Routes
