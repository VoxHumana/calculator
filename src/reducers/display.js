const __default = {
  init: false,
  contents: 0
}

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
        contents: `${action.answer}`
      }
    case 'CLEAR_DISPLAY':
      return __default
    case 'REMOVE_LAST_DISPLAY':
      if (state.init) {
        let contents = state.contents.slice(0, state.contents.length - 1)
        if (!contents.length) {
          return __default
        } else {
          return {
            init: true,
            contents
          }
        }
      } else {
        return __default
      }
    case 'ERROR_DISPLAY':
      return {
        init: false,
        contents: 'ERROR!'
      }
    default:
      return state
  }
}

export default display
