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

export const newToken = token => ({
  type: 'NEW_TOKEN',
  token
})

export const updateDisplay = token => ({
  type: 'UPDATE_DISPLAY',
  token
})
