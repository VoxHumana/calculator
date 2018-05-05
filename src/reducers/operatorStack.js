const operatorStack = (state = [], action) => {
  switch (action.type) {
    case 'NEW_OPERATOR':
      let opStack = [...state]
      opStack.push(action.op)
      return opStack
    default:
      return state
  }
}

export default operatorStack
