import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap'

import PostList from './PostList/PostList.jsx'
import ProfileHeader from './ProfileHeader/ProfileHeader.jsx'

function Profile(props) {
  return (
    <Fragment>
      <Row>
        <Col>
          <ProfileHeader />
        </Col>
      </Row>

      <Row>
        <Col>
          <PostList />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Profile