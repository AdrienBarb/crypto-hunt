import React, { useCallback } from 'react'
import { useRouter } from 'next/router'
import { ConnectFormWrapper } from '../styles/StyledConnectForm'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link'
import { StyledText } from '../styles/StyledText'
import { HorizontalMargin } from '../styles/StyledMargin'

const EmailPasswordAuthSignUp = ({ signUp }) => {
  const Router = useRouter()

  return (
    <ConnectFormWrapper>
      <Formik
        initialValues={{ surname: '', email: '', password: '' }}
        validationSchema={Yup.object({
          surname: Yup.string().required('Veuillez renseigner surname.'),
          email: Yup.string()
            .email("Votre adresse email n'est pas valide")
            .required("Veuillez renseigner l'email."),
          password: Yup.string()
            .min(8, 'Votre mot de passe doit faire minimum 8 caractères.')
            .required('Veuillez renseigner le mot de passe.'),
        })}
        onSubmit={async (values, actions) => {
          try {
            await signUp(values)
            Router.push(`${Router.query.path ? Router.query.path : '/'}`)
          } catch (error) {
            alert(error)
          }
        }}
      >
        {(formik) => (
          <form className="form-container" onSubmit={formik.handleSubmit}>
            <StyledText h2 karla regular center>
              Sign up
            </StyledText>

            <HorizontalMargin m1 />

            <div className="input-wrapper">
              <StyledText h5 mono regular color="black">
                USERNAME
              </StyledText>
              <Field
                id="surname"
                type="surname"
                className="text-input"
                label="Surnom"
                fullWidth={true}
                variant="outlined"
                placeHolder="Ex: CryptoFanDu75"
                {...formik.getFieldProps('surname')}
              />
              <StyledText color="red">
                <ErrorMessage name="surname" />
              </StyledText>
            </div>
            <div className="input-wrapper">
              <StyledText h5 mono regular color="black">
                EMAIL
              </StyledText>
              <Field
                id="email"
                type="email"
                className="text-input"
                label="Email"
                fullWidth={true}
                variant="outlined"
                placeHolder="Ex: jean@gmail.com"
                {...formik.getFieldProps('email')}
              />
              <StyledText color="red">
                <ErrorMessage name="email" />
              </StyledText>
            </div>
            <div className="input-wrapper">
              <StyledText h5 mono regular color="black">
                PASSWORD
              </StyledText>
              <Field
                id="password"
                type="password"
                className="text-input"
                label="Mot de passe"
                fullWidth={true}
                variant="outlined"
                placeHolder="Mot de passe"
                {...formik.getFieldProps('password')}
              />
              <StyledText color="red">
                <ErrorMessage name="password" />
              </StyledText>
            </div>

            <HorizontalMargin m2 />

            <div className="button-wrapper">
              <button className="form-button" type="submit">
                <StyledText h4>Valider</StyledText>
              </button>
            </div>
            <StyledText className="create-account" center>
              Already an account ?
              <Link
                href={{
                  pathname: '/sign-in',
                  query: { path: Router.query.path },
                }}
              >
                <StyledText link className="navigation-link">Sign in!</StyledText>
              </Link>
            </StyledText>
          </form>
        )}
      </Formik>
    </ConnectFormWrapper>
  )
}

export default EmailPasswordAuthSignUp
