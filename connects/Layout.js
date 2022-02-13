import { connect } from 'react-redux'
import Layout from '../components/Layout'
import { closeSnackbar } from '../store/actions/snackBarsActions'

const mapStatetoProps = (state) => ({
  state,
})

const mapDispatchToProps = (dispatch) => ({
  closeSnackbar: () => {
    dispatch(closeSnackbar())
  },
})

const LayoutContainer = connect(mapStatetoProps, mapDispatchToProps)(Layout)

export default LayoutContainer
