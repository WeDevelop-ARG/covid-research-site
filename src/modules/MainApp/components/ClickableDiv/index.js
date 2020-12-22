import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import classes from './index.module.scss'

function ClickableDiv ({ onClick, className, selected, children, ...props }) {
  return (
    <button
      className={classnames(classes.clickableDiv, className)}
      onClick={onClick}
      disabled={!onClick}
      aria-selected={selected}
      type='button'
      {...props}
    >
      {children}
    </button>
  )
}

ClickableDiv.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  selected: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default ClickableDiv
