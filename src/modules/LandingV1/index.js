import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import Index from './pages/Index'

function LandingV1 () {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route path={`${path}`}>
        <Index />
      </Route>
    </Switch>
  )
}

export default LandingV1
