import { connect } from 'react-redux'
import HeaderProjectList from '../components/HeaderProjectList'

const mapStatetoProps = (state) => ({
  state,
})

const mapDispatchToProps = (dispatch) => ({})

const HeaderProjectListContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(HeaderProjectList)

export default HeaderProjectListContainer
