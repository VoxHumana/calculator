const tokenBuffer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TOKEN':
      return [...state, action.token]
    case 'REMOVE_ALL_TOKENS':
      return []
    case 'REMOVE_LAST_TOKEN':
      if (state.length) {
        let buffer = [...state]
        buffer.splice(-1, 1)
        return buffer
      } else {
        return state
      }
    default:
      return state
  }
}

export default tokenBuffer
