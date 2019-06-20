import * as PostService from '../services/PostService'

export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const POSTS_LOADED = 'POSTS_LOADED'

export const getPostsAction = () => {
  return (dispatch) => {
    PostService.getPosts()
      .then((posts) => {
        dispatch({
          type: POSTS_LOADED,
          posts
        })
      })
  }
}

export const addPostAction = (post) => {
  return (dispatch) => {
    return PostService.addPost(post)
      .then(post => {
        dispatch({
          type: ADD_POST,
          post
        })
      })
  }
}

export const removePostAction = (id) => {
  return (dispatch) => {
    PostService.removePost(id)
      .then(() => {
        dispatch({
          type: REMOVE_POST,
          id
        })
      })
  }
}

export const getSinglePostAction = (id) => () => PostService.getSinglePost(id)

export const uploadImageAction = (data) => () => PostService.uploadImage(data)
