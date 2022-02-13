import { connect } from 'react-redux'
import Navigation from '../components/Navigation'
import { logout } from '../store/actions/usersActions'

const mapStatetoProps = (state) => ({
  state,
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout())
  },
})

const NavigationContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(Navigation)

export default NavigationContainer
