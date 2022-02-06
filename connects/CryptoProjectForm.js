import { connect } from 'react-redux'
import CryptoProjectForm from '../components/CryptoProjectForm'
import { addCryptoProject, editCryptoProject } from '../store/actions/cryptoProjectsActions'

const mapStatetoProps = (state) => ({
  state,
})

const mapDispatchToProps = (dispatch) => ({
  addCryptoProject: (cryptoProjectValues) => {
    dispatch(addCryptoProject(cryptoProjectValues))
  },
  editCryptoProject: (cryptoProjectValues, id) => {
    dispatch(editCryptoProject(cryptoProjectValues, id))
  },
})

const CryptoProjectFormContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(CryptoProjectForm)

export default CryptoProjectFormContainer
