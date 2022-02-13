import { connect } from 'react-redux'
import CurrentUser from '../components/CurrentUser'
import { getCurrentUser } from '../store/actions/usersActions'

const mapStatetoProps = (state) => ({
  state,
})

const mapDispatchToProps = (dispatch) => ({
  getCurrentUser: (user) => {
    dispatch(getCurrentUser(user))
  },
})

const CurrentUserContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(CurrentUser)

export default CurrentUserContainer
