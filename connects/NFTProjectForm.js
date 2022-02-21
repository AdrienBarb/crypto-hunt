import { connect } from "react-redux";
import NFTProjectForm from "../components/NFTProjectForm";
import {
  addNFTProject,
  editNFTProject,
  getCurrentNFTProject,
} from "../store/actions/nftProjectsActions";
import {
  checkIfProjectExist,
  cleanReducers,
} from "../store/actions/nftFormActions";

const mapStatetoProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  addNFTProject: (cryptoProjectValues) => {
    dispatch(addNFTProject(cryptoProjectValues));
  },
  editNFTProject: (cryptoProjectValues, id) => {
    dispatch(editNFTProject(cryptoProjectValues, id));
  },
  checkIfProjectExist: (value) => {
    dispatch(checkIfProjectExist(value));
  },
  cleanReducers: () => {
    dispatch(cleanReducers());
  },
  getCurrentNFTProject: (id) => {
    dispatch(getCurrentNFTProject(id));
  },
});

const NFTProjectFormContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(NFTProjectForm);

export default NFTProjectFormContainer;
