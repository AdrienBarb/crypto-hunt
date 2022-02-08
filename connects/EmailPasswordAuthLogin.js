import { connect } from 'react-redux'
import EmailPasswordAuthLogin from '../components/EmailPasswordAuthSignIn'
import { signIn } from '../store/actions/usersActions'

const mapStatetoProps = (state) => ({
  state,
})

const mapDispatchToProps = (dispatch) => ({
  signIn: (values) => {
    dispatch(signIn(values))
  },
})

const EmailPasswordAuthLoginContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(EmailPasswordAuthLogin)

export default EmailPasswordAuthLoginContainer
