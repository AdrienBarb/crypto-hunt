import React, { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { ConnectFormWrapper } from "../styles/StyledConnectForm";
import { useRouter } from "next/router";
import axios from "axios";
import { createGlobalStyle } from "styled-components";

const CryptoProjectForm = ({
  addCryptoProject,
  editCryptoProject,
  edit,
  state,
  checkIfProjectExist,
  getProjectDetails
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
  });

console.log(state)

  const handleTokenValueChange = (value) => {
    setFormValues({
      ...formValues,
      token: value.target.value,
    });
  };

  const handleNameValueChange = (value) => {
    setFormValues({
      ...formValues,
      name: value.target.value,
    });
  };
  const handleDescriptionValueChange = (value) => {
    setFormValues({
      ...formValues,
      description: value.target.value,
    });
  };
  const handleWebsiteLinkValueChange = (value) => {
    setFormValues({
      ...formValues,
      websiteLink: value.target.value,
    });
  };
  const handleWhitePaperLinkValueChange = (value) => {
    setFormValues({
      ...formValues,
      whitePaperLink: value.target.value,
    });
  };
  const handleTwitterLinkValueChange = (value) => {
    setFormValues({
      ...formValues,
      twitterLink: value.target.value,
    });
  };

  const handleNetworkOwnerRewardsValueChange = (value) => {
    setFormValues({
      ...formValues,
      networkOwnerRewards: value.target.value,
    });
  };
  const handleAddressOwnerRewardsValueChange = (value) => {
    setFormValues({
      ...formValues,
      addressOwnerRewards: value.target.value,
    });
  };


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
        description: state.cryptoProjectsReducers.findedCryptoDetails?.[formValues.token.toUpperCase()]?.description ? state.cryptoProjectsReducers.findedCryptoDetails[formValues.token.toUpperCase()].description : '',
        websiteLink: state.cryptoProjectsReducers.findedCryptoDetails?.[formValues.token.toUpperCase()]?.urls?.website.length ? state.cryptoProjectsReducers.findedCryptoDetails?.[formValues.token.toUpperCase()]?.urls?.website[0] : '',
        whitePaperLink: state.cryptoProjectsReducers.findedCryptoDetails?.[formValues.token.toUpperCase()]?.urls?.technical_doc.length ? state.cryptoProjectsReducers.findedCryptoDetails?.[formValues.token.toUpperCase()]?.urls?.technical_doc[0] : '',
        twitterLink: state.cryptoProjectsReducers.findedCryptoDetails?.[formValues.token.toUpperCase()]?.urls?.twitter.length ? state.cryptoProjectsReducers.findedCryptoDetails?.[formValues.token.toUpperCase()]?.urls?.twitter[0] : '',
      });
    }
  }, [state.cryptoProjectsReducers.findedCryptoDetails]);

  return (
    <ConnectFormWrapper>
      <Formik
        initialValues={{
          name: formValues.name,
          token: formValues.token,
          description: formValues.description,
          websiteLink: formValues.websiteLink,
          whitePaperLink: formValues.whitePaperLink,
          twitterLink: formValues.twitterLink,
          networkOwnerRewards: formValues.networkOwnerRewards,
          addressOwnerRewards: formValues.addressOwnerRewards
        }}
        // validationSchema={Yup.object({
        //   name: Yup.string()
        //     .required("Veuillez renseigner le nom du token."),
        //     token: Yup.string()
        //     .required('Veuillez renseigner le token.'),
        // })}
        onSubmit={async (values, actions) => {
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
            <div className="input-wrapper">
              <Field
                {...formik.getFieldProps("name")}
                id="name"
                label="Nom du projet"
                value={formValues.name}
                onChange={handleNameValueChange}
                fullWidth={true}
                placeholder="Nom du projet"
              />
              <ErrorMessage name="name" />
            </div>
            <div className="input-wrapper">
              <Field
                {...formik.getFieldProps("token")}
                id="token"
                label="Token"
                value={formValues.token}
                onChange={handleTokenValueChange}
                fullWidth={true}
                placeholder="Token"
                disabled={edit}
                onBlur={async (e) => {
                  if(edit) {
                    return
                  }
                  await checkIfProjectExist(e.target.value);
                  await getProjectDetails(e.target.value)
                }}
              />
              <ErrorMessage name="token" />
            </div>


            <div className="input-wrapper">
              <Field
                {...formik.getFieldProps("description")}
                id="description"
                label="Description"
                value={formValues.description}
                onChange={handleDescriptionValueChange}
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
                value={formValues.websiteLink}
                onChange={handleWebsiteLinkValueChange}
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
                value={formValues.whitePaperLink}
                onChange={handleWhitePaperLinkValueChange}
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
                value={formValues.twitterLink}
                onChange={handleTwitterLinkValueChange}
                fullWidth={true}
                placeholder="Lien twitter"
              />
              <ErrorMessage name="twitterLink" />
            </div>

            {state.usersReducers.currentUser.uid == state.cryptoProjectsReducers.currentCryptoProject.projectOwner &&
              <>
                <div className="input-wrapper">
                  <Field
                    {...formik.getFieldProps("networkOwnerRewards")}
                    id="networkOwnerRewards"
                    label="Rewards networks"
                    value={formValues.networkOwnerRewards}
                    onChange={handleNetworkOwnerRewardsValueChange}
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
                    value={formValues.addressOwnerRewards}
                    onChange={handleAddressOwnerRewardsValueChange}
                    fullWidth={true}
                    placeholder="Rewards address"
                  />
                  <ErrorMessage name="addressOwnerRewards" />
                </div>
              </>
            }


            <button type="submit">Valider</button>
          </form>
        )}
      </Formik>
    </ConnectFormWrapper>
  );
};

export default CryptoProjectForm;
