import { connect } from 'react-redux'
import { logoutAction } from '../../actions/userActions'

function Logout(props) {
  props.logout()
  props.history.push('/login')
  return null
}

export default connect(null, dispatch => {
  return {
    logout: () => dispatch(logoutAction())
  }
})(Logout)