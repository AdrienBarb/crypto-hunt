import React, { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { ConnectFormWrapper } from "../styles/StyledConnectForm";
import { useRouter } from "next/router";
import axios from "axios";

const CryptoProjectForm = ({
  addCryptoProject,
  editCryptoProject,
  edit,
  state,
  checkIfProjectExist,
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
  });

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

  useEffect(() => {
    if (state.cryptoProjectsReducers.existingCryptoProject.length) {
      setFormValues({
        ...formValues,
        token: "",
      });
    }
  }, [state.cryptoProjectsReducers.existingCryptoProject]);

  console.log(formValues);

  return (
    <ConnectFormWrapper>
      <Formik
        initialValues={{
          name: formValues.name,
          token: formValues.token,
          description: formValues.description,
          websiteLink: formValues.websiteLink,
        }}
        // validationSchema={Yup.object({
        //   email: Yup.string()
        //     .email("Votre adresse email n'est pas valide")
        //     .required("Veuillez renseigner l'email."),
        //   password: Yup.string()
        //     .min(8, 'Votre mot de passe doit faire minimum 8 caractères.')
        //     .required('Veuillez renseigner le mot de passe.'),
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
                onBlur={(e) => {
                  checkIfProjectExist(e.target.value);
                  axios
                    .get(`/api/test-crypto`, {
                      headers: {
                        Accept: "application/json",
                        "Access-Control-Allow-Origin": "*",
                      },
                    })
                    .then((response) => {
                      console.log("responseee", response);
                    })

                    .catch((err) => console.log(err));
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

            <button type="submit">Valider</button>
          </form>
        )}
      </Formik>
    </ConnectFormWrapper>
  );
};

export default CryptoProjectForm;
