import React, { Fragment } from 'react'

import Profile from './Profile/Profile.jsx'
import PostForm from './PostForm/PostForm'
import PostDetail from './Profile/PostDetail/PostDetail'

import UserRoute from '../../routes/UserRoute'

function Picstagram(props) {
    return (
      <Fragment>
        <UserRoute path='/profile' component={Profile} />
        <UserRoute path='/add' component={PostForm} />
        <UserRoute path='/post/:id' component={PostDetail} />
      </Fragment>
    )    
}

export default Picstagram