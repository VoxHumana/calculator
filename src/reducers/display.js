const display = (state = '0', action) => {
  switch (action.type) {
    case 'UPDATE_DISPLAY':
      return `${state}${action.token}`
    default:
      return state
  }
}

export default display
