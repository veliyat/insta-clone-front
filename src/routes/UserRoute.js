import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function UserRoute(props) {
  // const Component = props.component

  if(props.user) {
    return <Route {...props} /> 
  } else {
    return <Redirect to="/login" />
  }

  // return <Route path={props.path} render={() => {
  //   if(props.user)
  //     return <Component />
  //   else
  //     return <Redirect to="/login" />
  //   }} />
}

export default connect(state => ({
  user: state.user
}))(UserRoute)