import React, { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'

import ErrorBoundary from './components/ErrorBoundary'
import Routes from './routes'

export default function MainApp () {
  // TODO: Replace the error fallback component to do something useful for the user
  const ErrorFallbackComponent = () => null

  return (
    <StrictMode>
      <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ErrorBoundary>
    </StrictMode>
  )
}
