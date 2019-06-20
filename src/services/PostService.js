import axios from 'axios'
import { baseUrl } from '../config/api'

import Post from '../models/Post'
import { getCurrentUser } from './UserService'

const apiUrl = baseUrl + '/posts'

// const req = axios.create({
//   headers: { 
//     'Authorization': 'Bearer ' + (getCurrentUser() ? getCurrentUser().token : '') 
//   }
// })

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers = {
    'Authorization': 'Bearer ' + (getCurrentUser() ? getCurrentUser().token : '')
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export function addPost(post) {
  post.createdBy = getCurrentUser().id
  return axios.post(apiUrl, post)
    .then(result => {
      const post = result.data
      return new Post(
        post._id,
        post.caption,
        post.description,
        post.imageUrl
      )
    })
}

export function getPosts() {
  return axios.get(apiUrl)
    .then(result => {
      const posts = result.data
      return posts.map(post => {
        return new Post(
          post._id,
          post.caption,
          post.description,
          post.imageUrl
        )
      })
    })
}

export function removePost(id) {
  return axios.delete(apiUrl + '/' + id)
}

export function getSinglePost(id) {
  return axios.get(apiUrl + '/' + id)
    .then(result => new Post(
      result.data._id,
      result.data.caption,
      result.data.description,
      result.data.imageUrl
    ))
}

export function uploadImage(data) {
  return axios.post(apiUrl + '/upload', data)
    .then(result => result.data)
}