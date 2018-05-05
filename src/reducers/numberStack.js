const numberStack = (state = [], action) => {
  switch (action.type) {
    case 'NEW_NUMBER':
      return [...state, action.num]
    default:
      return state
  }
}

export default numberStack
