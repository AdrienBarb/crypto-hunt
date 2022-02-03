import { connect } from 'react-redux'
import Navigation from '../components/Navigation'

const mapStatetoProps = (state) => ({
  state,
})

const mapDispatchToProps = (dispatch) => ({})

const NavigationContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(Navigation)

export default NavigationContainer
