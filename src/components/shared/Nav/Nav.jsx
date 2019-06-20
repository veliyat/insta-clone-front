import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function Nav(props) {
  const { user } = props
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">
        <img 
          src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" 
          alt="Picstagram" 
          width="60px"
        />
        Picstagram
      </h5>
      <nav className="my-2 my-md-0 mr-md-3"> 
        { user && <Link className="p-2 text-dark" to="/profile">Profile</Link>}
        { user && <Link className="p-2 text-dark" to="/add">Add Post</Link> }
      </nav>
      { !user && <Link className="btn btn-outline-primary mr-1" to="/login">Login</Link> }
      { !user && <Link className="btn btn-outline-secondary mr-1" to="/register">Register</Link> }
      { user && <Link className="btn btn-outline-danger" to="/logout">Logout</Link> }
    </div>
  )
}

export default connect(state => ({
  user: state.user
}))(Nav)