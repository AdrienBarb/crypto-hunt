import { connect } from 'react-redux'
import FullScreenNavigation from '../components/FullScreenNavigation'
import { logout } from '../store/actions/usersActions'

const mapStatetoProps = (state) => ({
  state,
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout())
  },
})

const FullScreenNavigationContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(FullScreenNavigation)

export default FullScreenNavigationContainer
