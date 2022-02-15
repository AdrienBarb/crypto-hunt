import React, { useCallback } from 'react'
import { useRouter } from 'next/router'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link'
import { ConnectFormWrapper } from '../styles/StyledConnectForm'
import { StyledText } from '../styles/StyledText'
import { HorizontalMargin } from '../styles/StyledMargin'

const EmailPasswordAuthLogin = ({ signIn }) => {
  const Router = useRouter()

  return (
    <ConnectFormWrapper>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Votre adresse email n'est pas valide")
            .required("Veuillez renseigner l'email."),
          password: Yup.string()
            .min(8, 'Votre mot de passe doit faire minimum 8 caractères.')
            .required('Veuillez renseigner le mot de passe.'),
        })}
        onSubmit={async (values, actions) => {
          try {
            await signIn(values)

            Router.push(`${Router.query.path ? Router.query.path : '/'}`)
          } catch (error) {
            console.log('error')
            alert(error)
          }
        }}
      >
        {(formik) => (
          <form className="form-container" onSubmit={formik.handleSubmit}>
            <StyledText h2 karla regular center>
              Sign in
            </StyledText>

            <HorizontalMargin m1 />

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
                className="text-input"
                type="password"
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
                <StyledText link h4>
                  Valider
                </StyledText>
              </button>
            </div>

            <HorizontalMargin m1 />
            <StyledText className="create-account" center>
              No account yet ?
              <Link
                href={{
                  pathname: '/sign-up',
                  query: { path: Router.query.path },
                }}
              >
                <StyledText link bold className="navigation-link">
                  Create one!
                </StyledText>
              </Link>
            </StyledText>
          </form>
        )}
      </Formik>
    </ConnectFormWrapper>
  )
}

export default EmailPasswordAuthLogin
