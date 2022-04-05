import { connect } from "react-redux";
import CryptoProjectForm from "../components/CryptoProjectForm";
import {
  addCryptoProject,
  editCryptoProject,
  getCurrentCryptoProject,
} from "../store/actions/cryptoProjectsActions";
import {
  checkIfProjectExist,
  cleanReducers,
} from "../store/actions/cryptoFormActions";

const mapStatetoProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  addCryptoProject: (cryptoProjectValues) => {
    dispatch(addCryptoProject(cryptoProjectValues));
  },
  editCryptoProject: (cryptoProjectValues, id) => {
    dispatch(editCryptoProject(cryptoProjectValues, id));
  },
  checkIfProjectExist: (value) => {
    dispatch(checkIfProjectExist(value));
  },
  cleanReducers: () => {
    dispatch(cleanReducers());
  },
  getCurrentCryptoProject: (id) => {
    dispatch(getCurrentCryptoProject(id));
  },
});

const CryptoProjectFormContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(CryptoProjectForm);

export default CryptoProjectFormContainer;
