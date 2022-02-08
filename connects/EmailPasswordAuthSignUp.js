import { connect } from 'react-redux'
import EmailPasswordAuthSignUp from '../components/EmailPasswordAuthSignUp'
import { signUp } from '../store/actions/usersActions'

const mapStatetoProps = (state) => ({
  state,
})

const mapDispatchToProps = (dispatch) => ({
  signUp: (values) => {
    dispatch(signUp(values))
  },
})

const EmailPasswordAuthSignUpContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(EmailPasswordAuthSignUp)

export default EmailPasswordAuthSignUpContainer
