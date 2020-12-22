import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'

function LazyRoute (props) {
  // TODO: implement fallback while a page is loading
  return (
    <Suspense fallback={<NullComponent />}>
      <Route {...props} />
    </Suspense>
  )
}

function NullComponent () {
  return null
}

export default LazyRoute
