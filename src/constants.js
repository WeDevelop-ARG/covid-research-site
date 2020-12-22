const { isEmpty } = require('lodash')

export const IS_PRODUCTION_ENVIRONMENT = process.env.ENVIRONMENT === 'production'
export const IS_TESTING_ENVIRONMENT = process.env.ENVIRONMENT === 'testing'
export const IS_DEV_ENVIRONMENT = isEmpty(process.env.ENVIRONMENT)
