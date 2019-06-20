import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Form,
  FormGroup,
  Button,
  Input,
  Label,
  Row,
  Col
} from 'reactstrap'

import { loginAction } from '../../actions/userActions'

class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: {
        username: '',
        password: ''
      },
      errors: {}
    }
  }

  validate = () => {
    return {}
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { data } = this.state
    let errors = this.validate()

    if(Object.keys(errors).length) {
      this.setState({
        errors
      })
    } else {
      this.props.login(data)
        .then(user => this.props.history.push('/profile'))
        .catch(err => console.log('Failure', err))
    }

  }

  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <Row>
        <Col md={6}>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input id="username" name="username" onChange={this.handleChange}/>
            </FormGroup>

            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" id="password" name="password" onChange={this.handleChange}/>
            </FormGroup>

            <Button type="submit" color="primary">Login</Button>
          </Form>
        </Col>
      </Row>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (credentials) => {
      return dispatch(loginAction(credentials))
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)