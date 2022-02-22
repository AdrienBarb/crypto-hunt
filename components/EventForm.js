import React, { useEffect, useState } from 'react'
import { Formik, Field, ErrorMessage, useFormik } from 'formik'
import * as Yup from 'yup'
import { ConnectFormWrapper } from '../styles/StyledConnectForm'
import { useRouter } from 'next/router'
import { StyledText } from '../styles/StyledText'
import { HorizontalMargin, VerticalMargin } from '../styles/StyledMargin'
import { Link } from 'next/link'
import { HorizontalDivider } from '../styles/StyledDivider'
import Colors from '../constants/Colors'
import LoadingSpinner from './LoadingSpinner'

const EventForm = ({ addNFTProject, state, cleanReducers }) => {
  const router = useRouter()

  const [formValues, setFormValues] = useState({
    name: '',
  })

  // useEffect(() => {
  //   return () => {
  //     cleanReducers()
  //   }
  // }, [])

  return (
    <ConnectFormWrapper>
      <Formik
        enableReinitialize={true}
        initialValues={formValues}
        validationSchema={Yup.object({
          name: Yup.string().required('This field is required.'),
        })}
        onSubmit={async (values, actions) => {}}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div className="input-wrapper">
              <StyledText h5 mono regular color="black">
                PROJECT NAME
              </StyledText>
              <Field
                {...formik.getFieldProps('name')}
                className="text-input"
                id="name"
                label="Nom du projet"
                fullWidth={true}
                placeholder="Ex: Bored Ape Yacht Club"
              />
              <StyledText color="red">
                <ErrorMessage name="name" />
              </StyledText>
            </div>
          </form>
        )}
      </Formik>
    </ConnectFormWrapper>
  )
}

export default EventForm
