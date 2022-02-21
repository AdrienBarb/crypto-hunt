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

const CryptoProjectForm = ({
  addCryptoProject,
  editCryptoProject,
  projectId,
  state,
  checkIfProjectExist,
  cleanReducers,
  getCurrentCryptoProject,
}) => {
  const router = useRouter();
  const [tokenValue, setTokenValue] = useState("");
  const [isValidButtonVisible, setIsValidButtonVisible] = useState(false);

  const [formValues, setFormValues] = useState({
    name: "",
    token: "",
    description: "",
    websiteLink: "",
    whitePaperLink: "",
    twitterLink: "",
    networkOwnerRewards: "",
    addressOwnerRewards: "",
    tags: [],
  });

  useEffect(() => {
    if (projectId) {
      getCurrentCryptoProject(projectId);
    }
  }, [router]);

  useEffect(() => {
    if (projectId && state.cryptoProjectsReducers.currentCryptoProject) {
      setFormValues({
        ...formValues,
        name: state.cryptoProjectsReducers.currentCryptoProject?.name,
        token: state.cryptoProjectsReducers.currentCryptoProject?.token,
        description:
          state.cryptoProjectsReducers.currentCryptoProject?.description,
        websiteLink:
          state.cryptoProjectsReducers.currentCryptoProject?.websiteLink,
        whitePaperLink:
          state.cryptoProjectsReducers.currentCryptoProject?.whitePaperLink,
        twitterLink:
          state.cryptoProjectsReducers.currentCryptoProject?.twitterLink,
        networkOwnerRewards:
          state.cryptoProjectsReducers.currentCryptoProject
            ?.networkOwnerRewards,
        addressOwnerRewards:
          state.cryptoProjectsReducers.currentCryptoProject
            ?.addressOwnerRewards,
        tags: state.cryptoProjectsReducers.currentCryptoProject?.tags,
      });
    }
  }, [state.cryptoProjectsReducers.currentCryptoProject]);

  useEffect(() => {
    if (state.cryptoFormReducers.existingCryptoProject.length > 0) {
      setFormValues({
        ...formValues,
        name: "",
        token: "",
      });
    }
  }, [state.cryptoFormReducers.existingCryptoProject]);

  useEffect(() => {
    if (state.cryptoFormReducers.findedCryptoDetails) {
      setFormValues({
        ...formValues,
        name: state.cryptoFormReducers.findedCryptoDetails?.[
          Object.keys(state.cryptoFormReducers.findedCryptoDetails)[0]
        ]?.name
          ? state.cryptoFormReducers.findedCryptoDetails[
              Object.keys(state.cryptoFormReducers.findedCryptoDetails)[0]
            ].name
          : "",
        token: state.cryptoFormReducers.findedCryptoDetails?.[
          Object.keys(state.cryptoFormReducers.findedCryptoDetails)[0]
        ]?.symbol
          ? state.cryptoFormReducers.findedCryptoDetails[
              Object.keys(state.cryptoFormReducers.findedCryptoDetails)[0]
            ].symbol
          : "",
        description: state.cryptoFormReducers.findedCryptoDetails?.[
          Object.keys(state.cryptoFormReducers.findedCryptoDetails)[0]
        ]?.description
          ? state.cryptoFormReducers.findedCryptoDetails[
              Object.keys(state.cryptoFormReducers.findedCryptoDetails)[0]
            ].description
          : "",
        websiteLink: state.cryptoFormReducers.findedCryptoDetails?.[
          Object.keys(state.cryptoFormReducers.findedCryptoDetails)[0]
        ]?.urls?.website?.length
          ? state.cryptoFormReducers.findedCryptoDetails?.[
              Object.keys(state.cryptoFormReducers.findedCryptoDetails)[0]
            ]?.urls?.website[0]
          : "",
        whitePaperLink: state.cryptoFormReducers.findedCryptoDetails?.[
          Object.keys(state.cryptoFormReducers.findedCryptoDetails)[0]
        ]?.urls?.technical_doc?.length
          ? state.cryptoFormReducers.findedCryptoDetails?.[
              Object.keys(state.cryptoFormReducers.findedCryptoDetails)[0]
            ]?.urls?.technical_doc[0]
          : "",
        twitterLink: state.cryptoFormReducers.findedCryptoDetails?.[
          Object.keys(state.cryptoFormReducers.findedCryptoDetails)[0]
        ]?.urls?.twitter?.length
          ? state.cryptoFormReducers.findedCryptoDetails?.[
              Object.keys(state.cryptoFormReducers.findedCryptoDetails)[0]
            ]?.urls?.twitter[0]
          : "",
        tags: state.cryptoFormReducers.findedCryptoDetails?.[
          Object.keys(state.cryptoFormReducers.findedCryptoDetails)[0]
        ]?.tags?.length
          ? state.cryptoFormReducers.findedCryptoDetails?.[
              Object.keys(state.cryptoFormReducers.findedCryptoDetails)[0]
            ]?.tags
          : [],
        networkOwnerRewards: "",
        addressOwnerRewards: "",
      });
    }
  }, [state.cryptoFormReducers.findedCryptoDetails]);

  const handleCheckIfExist = () => {
    checkIfProjectExist(tokenValue);
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
          token: Yup.string().required("This field is required."),
        })}
        onSubmit={async (values, actions) => {
          try {
            if (projectId) {
              await editCryptoProject(
                values,
                state.cryptoProjectsReducers.currentCryptoProject?.id
              );
              router.push(
                `/crypto/${state.cryptoProjectsReducers.currentCryptoProject?.id}`
              );
            } else {
              await addCryptoProject(values);
              router.push("/cryptos");
            }
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {(formik) => (
          <form className="form-container" onSubmit={formik.handleSubmit}>
            <StyledText h2 karla regular center>
              {projectId ? "Edit the project" : "Add a new Crypto project"}
            </StyledText>
            <HorizontalMargin m1 />
            <div className="input-wrapper">
              <StyledText h5 mono regular>
                TOKEN
              </StyledText>
              <Field
                {...formik.getFieldProps("token")}
                id="token"
                className="text-input"
                label="Token"
                fullWidth={true}
                placeholder="Ex: ETH"
                disabled={projectId}
                onChange={(e) => {
                  formik.handleChange(e);
                  setTokenValue(e.target.value);
                  setIsValidButtonVisible(true);
                  cleanReducers();
                }}
              />
              <StyledText color="red">
                <ErrorMessage name="token" />
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
                {/* <HorizontalMargin m1 /> */}
              </>
            )}

            {state.cryptoFormReducers.loading ? (
              <LoadingSpinner />
            ) : projectId || state.cryptoFormReducers.formCanBeSubmit ? (
              <>
                <div className="input-wrapper">
                  <StyledText h5 mono regular color="black">
                    PROJECT NAME
                  </StyledText>
                  <Field
                    className="text-input"
                    id="name"
                    label="Nom du projet"
                    fullWidth={true}
                    placeholder="Ex: Ethereum"
                    {...formik.getFieldProps("name")}
                  />
                  <StyledText color="red">
                    <ErrorMessage name="name" />
                  </StyledText>
                </div>

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
                    placeholder="Ethereum (ETH) is a cryptocurrency . Users are able to generate ETH through the process of mining."
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
                    placeholder="Ex: https://www.ethereum.org/"
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
                    placeholder="Ex : https://github.com/ethereum/wiki/wiki/White-Paper"
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
                    placeholder="Ex: https://twitter.com/ethereum"
                  />
                  <StyledText color="red">
                    <ErrorMessage name="twitterLink" />
                  </StyledText>
                </div>
                <div className="input-wrapper">
                  <StyledText h5 mono regular>
                    TWITTER LINK
                  </StyledText>
                  <Field
                    {...formik.getFieldProps("test")}
                    id="test"
                    label="Lien twitter"
                    className="text-input"
                    fullWidth={true}
                    placeholder="Ex: https://twitter.com/ethereum"
                  />
                  <StyledText color="red">
                    <ErrorMessage name="test" />
                  </StyledText>
                </div>

                {(!projectId ||
                  (state.cryptoProjectsReducers.currentCryptoProject &&
                    state.usersReducers.currentUser &&
                    state.usersReducers.currentUser.uid ==
                      state.cryptoProjectsReducers.currentCryptoProject
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

export default CryptoProjectForm;
