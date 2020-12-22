import React from 'react'
import { isNil } from 'lodash'
import PropTypes from 'prop-types'

import { IS_DEV_ENVIRONMENT } from '~/src/constants'

class ErrorBoundary extends React.Component {
  state = { error: null }

  static getDerivedStateFromError (error) {
    return { error }
  }

  componentDidCatch (error, errorInfo) {
    if (IS_DEV_ENVIRONMENT) {
      console.error(error, errorInfo)
    }
  }

  shouldComponentUpdate (prevProps, prevState) {
    // Don't update the component if the state had an error and still has one.
    // This allows to break an infinite loop of error -> render -> error -> render
    if (!isNil(prevState.error) && !isNil(this.state.error)) {
      return false
    }

    return true
  }

  render () {
    const { error } = this.state
    const { FallbackComponent, children } = this.props

    if (!isNil(error)) {
      return isNil(FallbackComponent) ? null : <FallbackComponent error={error} />
    }

    return children
  }
}

ErrorBoundary.propTypes = {
  FallbackComponent: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default ErrorBoundary
