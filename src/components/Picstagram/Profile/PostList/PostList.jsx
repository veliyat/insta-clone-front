import React, { Component } from 'react'
import { Row } from 'reactstrap'
import { connect } from 'react-redux'

import PostItem from './Post/Post.jsx'
import { getPostsAction } from '../../../../actions/postActions.js';

class PostList extends Component {
  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    const { posts } = this.props

    return (
      <Row className="mt-4">
        {
          posts.map((post) => {
            return (
              <PostItem key={post.id} post={post} />
            )
          })
        }
      </Row>
    )
  }
}

function mapStateToProps(state) { //state = store.getState()
  return {
    posts: state.posts
  }  
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: () => {
      dispatch(getPostsAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)