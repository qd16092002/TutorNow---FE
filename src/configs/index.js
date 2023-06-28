export const USER_ROLE = {
  USER: 'USER',
  ADMIN: 'ADMIN'
}

export const HEADER = {
  API_KEY: 'x-api-key',
  CLIENT_ID: 'x-client-id',
  AUTHORIZATION: 'authorization'
}

export const RESPONSE_ERROR_STATUS = 'error'

export const ACCESS_TOKEN_EXPIRATION = 2 * 60 * 60

export const REFRESH_TOKEN_EXPIRATION = 30 * 24 * 60 * 60 * 1000 // 30 days

export const I18LANGUAGE_KEY = 'i18nextLng'

export const SUBMISSION_TYPE = {
  BACKTEST: 'backtest',
  PUBLIC_TEST: 'public-test',
  PRIVATE_TEST: 'private-test',
  MARKET_TEST: 'market-test',
  FUTURE: 'future'
}

export const dataSelection = {
  'Movement Score': 'MOVEMENT_SCORE',
  Correlation: 'CORRELATION',
  'True Contribution': 'TRUE_CONTRIBUTION'
}

export const SYMBOL_OPTIONS = ['Crypto', 'Stocks', 'FX', 'Fred', 'Label']
