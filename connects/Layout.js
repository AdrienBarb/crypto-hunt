import { connect } from 'react-redux'
import Layout from '../components/Layout'

const mapStatetoProps = (state) => ({
  state,
})

const mapDispatchToProps = (dispatch) => ({})

const LayoutContainer = connect(mapStatetoProps, mapDispatchToProps)(Layout)

export default LayoutContainer
