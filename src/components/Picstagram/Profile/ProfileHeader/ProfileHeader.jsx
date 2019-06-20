import React from 'react'
import { Row, Col } from 'reactstrap'
import { connect } from 'react-redux'

function ProfileHeader(props) {
  return (
    <Row className="mt-4">
      <Col md={4} className="ml-4 mt-4 text-center">
        <img width="200px" className="img-thumbnail rounded-circle" src="http://www.flightofpegasus.gr/heavy_metal/media/k2/items/cache/7a8c5a071ba2ebf7ef7baae38fec3a1f_L.jpg?t=-62169984000" alt=""/>
      </Col>
      <Col className="mt-4">
        <div>
          <h4>{props.user.name}</h4>
          <strong>Technical Guruji</strong>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors</p>
          <p>
            <a rel="noopener noreferrer" href="http://www.google.com" target="_blank">www.google.com</a>
          </p>
        </div>
      </Col>
    </Row>
  )
}

export default connect(state => ({
  user: state.user
}))(ProfileHeader)