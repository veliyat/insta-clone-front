import React from 'react'
import { connect } from 'react-redux'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import { removePostAction } from '../../../../../actions/postActions'

function Post(props) {
  const { post } = props
  
  return (
    <Col md={4} className="mb-4">
      <Link to={'post/' + post.id}>
        <img className="img-thumbnail" src={post.imageUrl} alt={post.caption} />
        <small>
          {post.caption}  
        </small>
      </Link>

      <span 
        className="text-danger float-right" 
        style={{ cursor: 'pointer' }}
        onClick={() => props.removePost(post.id)}
      >X</span>
    </Col>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    removePost: (id) => {
      dispatch(removePostAction(id))
    }
  }
}

export default connect(null, mapDispatchToProps)(Post)