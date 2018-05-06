const display = (state = {init: false, contents: '0'}, action) => {
  switch (action.type) {
    case 'UPDATE_DISPLAY':
      if (!state.init) {
        return {
          init: true,
          contents: action.token
        }
      } else {
        return {
          init: true,
          contents: `${state.contents}${action.token}`
        }
      }
    case 'ANSWER_DISPLAY':
      return {
        init: true,
        contents: action.answer
      }
    case 'CLEAR_DISPLAY':
      return {
        init: false,
        contents: '0'
      }
    case 'REMOVE_LAST_DISPLAY':
      let contents = state.contents.slice(0, state.contents.length - 1)
      if (!contents.length) {
        return {
          init: false,
          contents: '0'
        }
      } else {
        return {
          init: true,
          contents
        }
      }
    default:
      return state
  }
}

export default display
