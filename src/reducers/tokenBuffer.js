const tokenBuffer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_TOKEN':
      return [...state, action.token]
    default:
      return state
  }
}

export default tokenBuffer
