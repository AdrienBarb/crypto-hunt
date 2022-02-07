import React, { useCallback } from 'react'
import { useRouter } from 'next/router'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { auth } from '../firebase/clientApp'
import { signInWithEmailAndPassword } from 'firebase/auth'
import Link from 'next/link'
import { ConnectFormWrapper } from '../styles/StyledConnectForm'

const EmailPasswordAuthLogin = () => {
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
            await signInWithEmailAndPassword(
              auth,
              values.email,
              values.password
            )

            Router.push(`${Router.query.path ? Router.query.path : '/'}`)
          } catch (error) {
            console.log('error')
            alert(error)
          }
        }}
      >
        {(formik) => (
          <form className="form-container" onSubmit={formik.handleSubmit}>
            <div className="form-title">Se Connecter</div>
            <div className="input-wrapper">
              <Field
                id="email"
                type="email"
                label="Email"
                fullWidth={true}
                variant="outlined"
                placeHolder="Email"
                {...formik.getFieldProps('email')}
              />
              <ErrorMessage name="email" />
            </div>
            <div className="input-wrapper">
              <Field
                id="password"
                type="password"
                label="Mot de passe"
                fullWidth={true}
                variant="outlined"
                placeHolder="Mot de passe"
                {...formik.getFieldProps('password')}
              />
              <ErrorMessage name="password" />
            </div>

            <button type="submit">Valider</button>
          </form>
        )}
      </Formik>

      <div className="create-account">
        Pas encore de compte ?
        <Link
          href={{ pathname: '/sign-up', query: { path: Router.query.path } }}
        >
          <div className="navigation-link">Créez en un!</div>
        </Link>
      </div>
    </ConnectFormWrapper>
  )
}

export default EmailPasswordAuthLogin
