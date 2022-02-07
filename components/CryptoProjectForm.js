import React from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link'
import { ConnectFormWrapper } from '../styles/StyledConnectForm'
import { useRouter } from 'next/router'

const CryptoProjectForm = ({
  addCryptoProject,
  editCryptoProject,
  edit,
  state,
  checkIfProjectExist,
}) => {
  const router = useRouter()

  console.log(state.cryptoProjectsReducers)

  return (
    <ConnectFormWrapper>
      <Formik
        initialValues={{
          name: edit
            ? state.cryptoProjectsReducers.currentCryptoProject?.name
            : '',
          token: edit
            ? state.cryptoProjectsReducers.currentCryptoProject?.token
            : '',
          description: edit
            ? state.cryptoProjectsReducers.currentCryptoProject?.description
            : '',
          websiteLink: edit
            ? state.cryptoProjectsReducers.currentCryptoProject?.websiteLink
            : '',
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
              )
              router.push(
                `/crypto/${state.cryptoProjectsReducers.currentCryptoProject?.id}`
              )
            } else {
              await addCryptoProject(values)
              router.push('/cryptos')
            }
          } catch (error) {
            console.log(error)
          }
        }}
      >
        {(formik) => (
          <form className="form-container" onSubmit={formik.handleSubmit}>
            <div className="form-title">
              {edit ? 'Modifier un projet' : 'Ajouter un nouveau projet'}
            </div>
            <div className="input-wrapper">
              <Field
                id="name"
                label="Nom du projet"
                fullWidth={true}
                placeholder="Nom du projet"
                {...formik.getFieldProps('name')}
              />
              <ErrorMessage name="name" />
            </div>
            <div className="input-wrapper">
              <Field
                {...formik.getFieldProps('token')}
                id="token"
                label="Token"
                fullWidth={true}
                placeholder="Token"
                onBlur={(e) => checkIfProjectExist(e.target.value)}
              />
              <ErrorMessage name="token" />
            </div>
            <div className="input-wrapper">
              <Field
                id="description"
                label="Description"
                fullWidth={true}
                placeholder="Description"
                {...formik.getFieldProps('description')}
              />
              <ErrorMessage name="description" />
            </div>
            <div className="input-wrapper">
              <Field
                id="websiteLink"
                label="Lien du site internet"
                fullWidth={true}
                placeholder="Lien du site internet"
                {...formik.getFieldProps('websiteLink')}
              />
              <ErrorMessage name="websiteLink" />
            </div>

            <button type="submit">Valider</button>
          </form>
        )}
      </Formik>
    </ConnectFormWrapper>
  )
}

export default CryptoProjectForm
