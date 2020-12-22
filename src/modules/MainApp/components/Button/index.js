import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'

import classes from './styles.module.scss'

const Button = ({ type = 'button', variant = 'primary', className, children, ...props }) => (
  <button
    type={type}
    className={classnames(classes.button, classes[variant], className)}
    {...props}
  >
    {children}
  </button>
)

Button.propTypes = {
  state: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  variant: PropTypes.string
}

export default Button
