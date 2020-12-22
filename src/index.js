import React from 'react'
import { render } from 'react-dom'
import MainApp from './modules/MainApp'

import './styles/global.scss'

import classes from './styles/root.module.scss'

const root = document.createElement('div')
root.classList.add(classes.root)

render(<MainApp />, root)

document.body.appendChild(root)
