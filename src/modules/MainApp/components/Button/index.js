import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import { isString } from 'lodash'

import classes from './styles.module.scss'

function Button ({
  as: ButtonComponent = 'button',
  variant = 'primary',
  type,
  className,
  children,
  ...props
}) {
  if (ButtonComponent === 'button') type ??= 'button'

  className = classnames(
    classes.button,
    classes[variant],
    className,
    { [classes[`as_${ButtonComponent}`]]: isString(ButtonComponent) }
  )

  return (
    <ButtonComponent
      type={type}
      className={className}
      {...props}
    >
      {children}
    </ButtonComponent>
  )
}

Button.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  variant: PropTypes.string
}

export default Button
