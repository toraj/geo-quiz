// Import actions from '../actions'

const INITIAL_STATE = {}

export default function(state = INITIAL_STATE, action) {
  const { type } = action

  switch (type) {

    // case NAME_OF_ACTION:
    //   return {
    //     ...state,
    //     Add specific state for this action
    //   }

    default:
      return state
  }
}
