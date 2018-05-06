export const newNum = num => ({
  type: 'NEW_NUMBER',
  num
})

export const newOp = op => ({
  type: 'NEW_OPERATOR',
  op
})

export const calculate = () => ({
  type: 'CALCULATE'
})

export const addToken = token => ({
  type: 'ADD_TOKEN',
  token
})

export const removeAllTokens = () => ({
  type: 'REMOVE_ALL_TOKENS'
})

export const removeLastToken = () => ({
  type: 'REMOVE_LAST_TOKEN'
})

export const updateDisplay = token => ({
  type: 'UPDATE_DISPLAY',
  token
})

export const answerDisplay = answer => ({
  type: 'ANSWER_DISPLAY',
  answer
})

export const removeLastDisplay = () => ({
  type: 'REMOVE_LAST_DISPLAY'
})

export const clearDisplay = () => ({
  type: 'CLEAR_DISPLAY'
})
