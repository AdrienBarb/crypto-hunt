import React, { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { ConnectFormWrapper } from "../styles/StyledConnectForm";
import { useRouter } from "next/router";
import { StyledText } from "../styles/StyledText";
import { HorizontalMargin, VerticalMargin } from "../styles/StyledMargin";
import { Link } from "next/link";
import { HorizontalDivider } from "../styles/StyledDivider";
import Colors from "../constants/Colors";
import LoadingSpinner from "./LoadingSpinner";

const NFTProjectForm = ({
  addNFTProject,
  editNFTProject,
  projectId,
  state,
  checkIfProjectExist,
  cleanReducers,
  getCurrentNFTProject,
}) => {
  const router = useRouter();
  const [projectName, setProjectNameValue] = useState("");
  const [isValidButtonVisible, setIsValidButtonVisible] = useState(false);

  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    websiteLink: "",
    whitePaperLink: "",
    twitterLink: "",
    networkOwnerRewards: "",
    addressOwnerRewards: "",
    tags: [],
  });

  useEffect(() => {
    if (state.nftFormReducers.existingNFTProject.length > 0) {
      setFormValues({
        ...formValues,
        name: "",
      });
    }
  }, [state.nftFormReducers.existingNFTProject]);

  useEffect(() => {
    if (projectId) {
      getCurrentNFTProject(projectId);
    }
  }, [router]);

  useEffect(() => {
    if (projectId && state.nftProjectsReducers.currentNFTProject) {
      setFormValues({
        ...formValues,
        name: state.cryptoProjectsReducers.currentNFTProject?.name,
        description:
          state.cryptoProjectsReducers.currentNFTProject?.description,
        websiteLink:
          state.cryptoProjectsReducers.currentNFTProject?.websiteLink,
        whitePaperLink:
          state.cryptoProjectsReducers.currentNFTProject?.whitePaperLink,
        twitterLink:
          state.cryptoProjectsReducers.currentNFTProject?.twitterLink,
        networkOwnerRewards:
          state.cryptoProjectsReducers.currentNFTProject?.networkOwnerRewards,
        addressOwnerRewards:
          state.cryptoProjectsReducers.currentNFTProject?.addressOwnerRewards,
        tags: state.cryptoProjectsReducers.currentNFTProject?.tags,
      });
    }
  }, [state.nftProjectsReducers.currentNFTProject]);

  const handleCheckIfExist = () => {
    checkIfProjectExist(projectName);
    setIsValidButtonVisible(!isValidButtonVisible);
  };

  useEffect(() => {
    return () => {
      cleanReducers();
    };
  }, []);

  return (
    <ConnectFormWrapper>
      <Formik
        enableReinitialize={true}
        initialValues={formValues}
        validationSchema={Yup.object({
          name: Yup.string().required("This field is required."),
        })}
        onSubmit={async (values, actions) => {
          try {
            if (projectId) {
              await editNFTProject(
                values,
                state.nftProjectsReducers.currentNFTProject?.id
              );
              router.push(
                `/nft/${state.nftProjectsReducers.currentNFTProject?.id}`
              );
            } else {
              await addNFTProject(values);
              router.push("/nfts");
            }
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {(formik) => (
          <form className="form-container" onSubmit={formik.handleSubmit}>
            <StyledText h2 karla regular center>
              {projectId ? "Edit the project" : "Add a new NFT project"}
            </StyledText>
            <HorizontalMargin m1 />

            <div className="input-wrapper">
              <StyledText h5 mono regular color="black">
                PROJECT NAME
              </StyledText>
              <Field
                {...formik.getFieldProps("name")}
                className="text-input"
                id="name"
                label="Nom du projet"
                fullWidth={true}
                onChange={(e) => {
                  formik.handleChange(e);
                  setProjectNameValue(e.target.value);
                  setIsValidButtonVisible(true);
                  cleanReducers();
                }}
                placeholder="Ex: Bored Ape Yacht Club"
              />
              <StyledText color="red">
                <ErrorMessage name="name" />
              </StyledText>
            </div>

            {isValidButtonVisible && (
              <>
                <HorizontalMargin m1 />
                <div
                  className="form-button"
                  onClick={() => handleCheckIfExist()}
                >
                  <StyledText link h4>
                    Rechercher
                  </StyledText>
                </div>
              </>
            )}

            {state.nftFormReducers.loading ? (
              <LoadingSpinner />
            ) : projectId || state.nftFormReducers.formCanBeSubmit ? (
              <>
                <div className="input-wrapper">
                  <StyledText h5 mono regular>
                    DESCRIPTION
                  </StyledText>
                  <Field
                    {...formik.getFieldProps("description")}
                    id="description"
                    label="Description"
                    className="text-input"
                    as="textarea"
                    fullWidth={true}
                    multiline={true}
                    minHeight={100}
                    rows={4}
                    placeholder="The Bored Ape Yacht Club is a collection of 10000 unique Bored Ape NFTs"
                  />
                  <StyledText color="red">
                    <ErrorMessage name="description" />
                  </StyledText>
                </div>
                <div className="input-wrapper">
                  <StyledText h5 mono regular>
                    WEBSITE LINK
                  </StyledText>
                  <Field
                    {...formik.getFieldProps("websiteLink")}
                    id="websiteLink"
                    label="Lien du site internet"
                    className="text-input"
                    fullWidth={true}
                    placeholder="Ex: https://boredapeyachtclub.com/"
                  />
                  <StyledText color="red">
                    <ErrorMessage name="websiteLink" />
                  </StyledText>
                </div>

                <div className="input-wrapper">
                  <StyledText h5 mono regular>
                    WHITEPAPER LINK
                  </StyledText>
                  <Field
                    {...formik.getFieldProps("whitePaperLink")}
                    id="whitePaperLink"
                    className="text-input"
                    label="Lien du white paper"
                    fullWidth={true}
                    placeholder="Ex : https://github.com/bayc/wiki/wiki/White-Paper"
                  />
                  <StyledText color="red">
                    <ErrorMessage name="whitePaperLink" />
                  </StyledText>
                </div>
                <div className="input-wrapper">
                  <StyledText h5 mono regular>
                    TWITTER LINK
                  </StyledText>
                  <Field
                    {...formik.getFieldProps("twitterLink")}
                    id="twitterLink"
                    label="Lien twitter"
                    className="text-input"
                    fullWidth={true}
                    placeholder="Ex: https://twitter.com/BoredApeYC"
                  />
                  <StyledText color="red">
                    <ErrorMessage name="twitterLink" />
                  </StyledText>
                </div>

                {(!projectId ||
                  (state.usersReducers.currentUser &&
                    state.nftProjectsReducers.currentNFTProject &&
                    state.usersReducers.currentUser.uid ==
                      state.nftProjectsReducers.currentNFTProject
                        .projectOwner)) && (
                  <>
                    <HorizontalDivider
                      width="100%"
                      color="black"
                      opacity="0.1"
                    />
                    <StyledText karla light>
                      By giving your public address, other users can send you
                      tips to thank you for having found this project.
                    </StyledText>
                    <HorizontalMargin m1 />
                    <div className="input-wrapper">
                      <StyledText h5 mono regular>
                        YOUR REWARDS NETWORK
                      </StyledText>
                      <Field
                        {...formik.getFieldProps("networkOwnerRewards")}
                        id="networkOwnerRewards"
                        label="Rewards networks"
                        className="text-input"
                        fullWidth={true}
                        placeholder="Ex: BNB"
                      />
                      <StyledText color="red">
                        <ErrorMessage name="networkOwnerRewards" />
                      </StyledText>
                    </div>
                    <div className="input-wrapper">
                      <StyledText h5 mono regular>
                        YOUR REWARDS ADRESS
                      </StyledText>
                      <Field
                        className="text-input"
                        id="addressOwnerRewards"
                        label="Rewards networks"
                        fullWidth={true}
                        placeholder="Ex: 0xaCe0A5bf0cf2a01c2c90A8F7je275430e1684a9"
                        {...formik.getFieldProps("addressOwnerRewards")}
                      />
                      <StyledText color="red">
                        <ErrorMessage name="addressOwnerRewards" />
                      </StyledText>
                    </div>
                  </>
                )}
                <HorizontalMargin m2 />
                <div className="button-wrapper">
                  <button className="form-button" type="submit">
                    <StyledText link h4>
                      Valider
                    </StyledText>
                  </button>
                </div>
              </>
            ) : (
              ""
            )}
          </form>
        )}
      </Formik>
    </ConnectFormWrapper>
  );
};

export default NFTProjectForm;
