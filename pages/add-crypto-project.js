import React from 'react'
import Layout from '../components/Layout'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link'
import { ConnectFormWrapper } from '../styles/StyledConnectForm'
import { useRouter } from 'next/router'
import {
  CenterContainer,
  ScreenContainer,
} from '../styles/StyledScreenContainer'

const cryptoForm = () => {
  const Router = useRouter()

  return (
    <Layout>
      <ScreenContainer>
        <CenterContainer>
          <ConnectFormWrapper>
            <Formik
              initialValues={{
                projectName: '',
                token: '',
                description: '',
                websiteLink: '',
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
                console.log(values)
              }}
            >
              {(formik) => (
                <form className="form-container" onSubmit={formik.handleSubmit}>
                  <div className="form-title">Ajouter un nouveau projet</div>
                  <div className="input-wrapper">
                    <Field
                      id="projectName"
                      label="Nom du projet"
                      fullWidth={true}
                      placeholder="Nom du projet"
                      {...formik.getFieldProps('email')}
                    />
                    <ErrorMessage name="projectName" />
                  </div>
                  <div className="input-wrapper">
                    <Field
                      id="token"
                      label="Token"
                      fullWidth={true}
                      placeholder="Token"
                      {...formik.getFieldProps('token')}
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
        </CenterContainer>
      </ScreenContainer>
    </Layout>
  )
}

export default cryptoForm
