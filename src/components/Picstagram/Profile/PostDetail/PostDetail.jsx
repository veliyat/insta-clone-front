import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getSinglePostAction } from '../../../../actions/postActions'

class PostDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post: null
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getPost(id).then(post => this.setState({ post }))
  }

  render() {
    const { post } = this.state

    if(post) {
      return (
        <div className="col-md-4">
          <div className="card">
            <img className="img-thumbnail" src={post.imageUrl} alt={post.caption} />
            <div className="card-header">{post.caption}</div>
            <div className="card-body">{post.description}</div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="alert alert-info">
          Loading...          
        </div>
      )
    }
  }
}

export default connect(null, dispatch => ({
  getPost: (id) => dispatch(getSinglePostAction(id))
}))(PostDetail)