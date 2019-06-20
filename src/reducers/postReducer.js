import { ADD_POST, REMOVE_POST, POSTS_LOADED } from '../actions/postActions'

export function postReducer(state = [], action) {
  switch(action.type) {
    case POSTS_LOADED:
      return action.posts

    case ADD_POST:
      return [
        ...state,
        action.post
      ]

    case REMOVE_POST:
      return state.filter((post) =>  action.id !== post.id)

    default:
      return state
  }
}