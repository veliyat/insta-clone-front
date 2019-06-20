import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Form,
  Label,
  Input,
  Button,
  FormGroup
} from 'reactstrap'

import { addPostAction, uploadImageAction } from '../../../actions/postActions'

class PostForm extends Component {

  constructor(props) {
    super(props)

    this.state = this.getInitialState()

    this.addPost = this.addPost.bind(this)
  }

  getInitialState = () => {
    return {
      data: {
        caption: '',
        description: '',
        imageUrl: ''
      },
      errors: {}
    }
  }
  
  addPost(e) {
    e.preventDefault()
    const { data } = this.state
    const errors = this.validate()

    if(Object.keys(errors).length) {
      this.setState({
        errors
      })
    } else {
      this.props.addPost(data)
        .then(() => {
          this.props.history.push('/profile')
        })
      this.setState(this.getInitialState())
    }
  }

  validate = () => {
    const { data } = this.state
    let errors = {}

    if(data.caption === '') errors.caption = 'Caption can not be blank'
    if(data.description === '') errors.description = 'Description can not be blank'
    if(data.imageUrl === '') errors.imageUrl = 'ImageUrl can not be blank'

    return errors
  }

  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      },
      errors: {
        ...this.state.errors,
        [e.target.name]: ''
      }
    })
  }

  uploadImage = (e) => {
    let data = new FormData()
    data.append('image', e.target.files[0])
    this.props.upload(data)
      .then(image => this.setState({
        data: {
          ...this.state.data,
          imageUrl: image.imageUrl
        }
      }))
      .catch(() => this.setState({
        data: {
          ...this.state.data,
          imageUrl: ''
        }
      }))
  }

  render() {
    const { data, errors } = this.state

    return (
      <Form onSubmit={this.addPost}>
        <h2>Add Post</h2>
        <hr />
  
        <FormGroup>
          <Label for="caption">Caption</Label>
          <Input type="text" id="caption" name="caption" value={data.caption} invalid={!!errors.caption} onChange={this.handleChange}/>
          <span className="invalid-feedback">{errors.caption}</span>
        </FormGroup>
  
        <FormGroup>
          <Label for="description">Description</Label>
          <Input type="textarea" id="description" name="description" value={data.description} invalid={!!errors.description} onChange={this.handleChange}/>
          <span className="invalid-feedback">{errors.description}</span>
        </FormGroup>
  
        <FormGroup>
          <Label for="image">Image</Label>
          <Input type="file" id="image" name="image" invalid={!!errors.imageUrl} onChange={this.uploadImage} />
          <span className="invalid-feedback">{errors.imageUrl}</span>
          { !!data.imageUrl && <img className="img-thumbnail" src={data.imageUrl} alt={data.caption} /> }
        </FormGroup>
  
        <Button type="submit" color="primary">Add</Button>
      </Form>
    )
  }  
}

function mapDispatchToProps(dispatch) { //dispatch = store.dispatch()
  return {
    addPost: (post) => dispatch(addPostAction(post)),
    upload: (data) => dispatch(uploadImageAction(data))
  }
}

export default connect(null, mapDispatchToProps)(PostForm)