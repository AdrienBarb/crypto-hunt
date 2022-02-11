import React, { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ConnectFormWrapper } from "../styles/StyledConnectForm";
import { useRouter } from "next/router";

const CryptoProjectForm = ({
  addCryptoProject,
  editCryptoProject,
  edit,
  state,
  checkIfProjectExist,
  getProjectDetails,
}) => {
  const router = useRouter();

  const [formValues, setFormValues] = useState({
    name: edit ? state.cryptoProjectsReducers.currentCryptoProject?.name : "",
    token: edit ? state.cryptoProjectsReducers.currentCryptoProject?.token : "",
    description: edit
      ? state.cryptoProjectsReducers.currentCryptoProject?.description
      : "",
    websiteLink: edit
      ? state.cryptoProjectsReducers.currentCryptoProject?.websiteLink
      : "",
    whitePaperLink: edit
      ? state.cryptoProjectsReducers.currentCryptoProject?.whitePaperLink
      : "",
    twitterLink: edit
      ? state.cryptoProjectsReducers.currentCryptoProject?.twitterLink
      : "",
    networkOwnerRewards: edit
      ? state.cryptoProjectsReducers.currentCryptoProject?.networkOwnerRewards
      : "",
    addressOwnerRewards: edit
      ? state.cryptoProjectsReducers.currentCryptoProject?.addressOwnerRewards
      : "",
    tags: [],
  });

  useEffect(() => {
    if (state.cryptoProjectsReducers.existingCryptoProject.length) {
      setFormValues({
        ...formValues,
        token: "",
      });
    }
  }, [state.cryptoProjectsReducers.existingCryptoProject]);

  useEffect(() => {
    if (state.cryptoProjectsReducers.findedCryptoDetails) {
      setFormValues({
        ...formValues,
        description: state.cryptoProjectsReducers.findedCryptoDetails?.[
          Object.keys(state.cryptoProjectsReducers.findedCryptoDetails)[0]
        ]?.description
          ? state.cryptoProjectsReducers.findedCryptoDetails[
              Object.keys(state.cryptoProjectsReducers.findedCryptoDetails)[0]
            ].description
          : "",
        websiteLink: state.cryptoProjectsReducers.findedCryptoDetails?.[
          Object.keys(state.cryptoProjectsReducers.findedCryptoDetails)[0]
        ]?.urls?.website.length
          ? state.cryptoProjectsReducers.findedCryptoDetails?.[
              Object.keys(state.cryptoProjectsReducers.findedCryptoDetails)[0]
            ]?.urls?.website[0]
          : "",
        whitePaperLink: state.cryptoProjectsReducers.findedCryptoDetails?.[
          Object.keys(state.cryptoProjectsReducers.findedCryptoDetails)[0]
        ]?.urls?.technical_doc.length
          ? state.cryptoProjectsReducers.findedCryptoDetails?.[
              Object.keys(state.cryptoProjectsReducers.findedCryptoDetails)[0]
            ]?.urls?.technical_doc[0]
          : "",
        twitterLink: state.cryptoProjectsReducers.findedCryptoDetails?.[
          Object.keys(state.cryptoProjectsReducers.findedCryptoDetails)[0]
        ]?.urls?.twitter.length
          ? state.cryptoProjectsReducers.findedCryptoDetails?.[
              Object.keys(state.cryptoProjectsReducers.findedCryptoDetails)[0]
            ]?.urls?.twitter[0]
          : "",
        tags: state.cryptoProjectsReducers.findedCryptoDetails?.[
          Object.keys(state.cryptoProjectsReducers.findedCryptoDetails)[0]
        ]?.tags.length
          ? state.cryptoProjectsReducers.findedCryptoDetails?.[
              Object.keys(state.cryptoProjectsReducers.findedCryptoDetails)[0]
            ]?.tags
          : [],
      });
    }
  }, [state.cryptoProjectsReducers.findedCryptoDetails]);

  return (
    <ConnectFormWrapper>
      <Formik
        enableReinitialize={true}
        initialValues={formValues}
        validationSchema={Yup.object({
          name: Yup.string().required("Veuillez renseigner le nom du token."),
          token: Yup.string().required("Veuillez renseigner le token."),
        })}
        onSubmit={async (values, actions) => {
          console.log("Values on submit ", values);
          try {
            if (edit) {
              await editCryptoProject(
                values,
                state.cryptoProjectsReducers.currentCryptoProject?.id
              );
              router.push(
                `/crypto/${state.cryptoProjectsReducers.currentCryptoProject?.id}`
              );
            } else {
              await addCryptoProject(formValues);
              router.push("/cryptos");
            }
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {(formik) => (
          <form className="form-container" onSubmit={formik.handleSubmit}>
            <div className="form-title">
              {edit ? "Modifier un projet" : "Ajouter un nouveau projet"}
            </div>
            {console.log(formik.errors)}
            <div className="input-wrapper">
              <Field
                id="name"
                label="Nom du projet"
                // value={formValues.name}
                // onChange={handleNameValueChange}
                fullWidth={true}
                placeholder="Nom du projet"
                {...formik.getFieldProps("name")}
              />
              <ErrorMessage name="name" />
            </div>
            <div className="input-wrapper">
              <Field
                {...formik.getFieldProps("token")}
                id="token"
                label="Token"
                // value={formValues.token}
                // onChange={handleTokenValueChange}
                fullWidth={true}
                placeholder="Token"
                disabled={edit}
                onBlur={async (e) => {
                  if (edit) {
                    return;
                  }
                  await checkIfProjectExist(e.target.value);
                  await getProjectDetails(e.target.value);
                }}
              />
              <ErrorMessage name="token" />
            </div>

            <div className="input-wrapper">
              <Field
                {...formik.getFieldProps("description")}
                id="description"
                label="Description"
                // value={formValues.description}
                // onChange={handleDescriptionValueChange}
                fullWidth={true}
                placeholder="Description"
              />
              <ErrorMessage name="description" />
            </div>
            <div className="input-wrapper">
              <Field
                {...formik.getFieldProps("websiteLink")}
                id="websiteLink"
                label="Lien du site internet"
                // value={formValues.websiteLink}
                // onChange={handleWebsiteLinkValueChange}
                fullWidth={true}
                placeholder="Lien du site internet"
              />
              <ErrorMessage name="websiteLink" />
            </div>

            <div className="input-wrapper">
              <Field
                {...formik.getFieldProps("whitePaperLink")}
                id="whitePaperLink"
                label="Lien du white paper"
                // value={formValues.whitePaperLink}
                // onChange={handleWhitePaperLinkValueChange}
                fullWidth={true}
                placeholder="Lien du white paper"
              />
              <ErrorMessage name="whitePaperLink" />
            </div>
            <div className="input-wrapper">
              <Field
                {...formik.getFieldProps("twitterLink")}
                id="twitterLink"
                label="Lien twitter"
                // value={formValues.twitterLink}
                // onChange={handleTwitterLinkValueChange}
                fullWidth={true}
                placeholder="Lien twitter"
              />
              <ErrorMessage name="twitterLink" />
            </div>

            {(!edit ||
              state.usersReducers.currentUser.uid ==
                state.cryptoProjectsReducers.currentCryptoProject
                  .projectOwner) && (
              <>
                <div className="input-wrapper">
                  <Field
                    {...formik.getFieldProps("networkOwnerRewards")}
                    id="networkOwnerRewards"
                    label="Rewards networks"
                    // value={formValues.networkOwnerRewards}
                    // onChange={handleNetworkOwnerRewardsValueChange}
                    fullWidth={true}
                    placeholder="Rewards networks"
                  />
                  <ErrorMessage name="networkOwnerRewards" />
                </div>
                <div className="input-wrapper">
                  <Field
                    {...formik.getFieldProps("addressOwnerRewards")}
                    id="addressOwnerRewards"
                    label="Rewards networks"
                    // value={formValues.addressOwnerRewards}
                    // onChange={handleAddressOwnerRewardsValueChange}
                    fullWidth={true}
                    placeholder="Rewards address"
                  />
                  <ErrorMessage name="addressOwnerRewards" />
                </div>
              </>
            )}

            <button type="submit">Valider</button>
          </form>
        )}
      </Formik>
    </ConnectFormWrapper>
  );
};

export default CryptoProjectForm;
