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

const NFTProjectForm = ({
  addNFTProject,
  editNFTProject,
  edit,
  state,
  checkIfProjectExist,
  cleanReducers,
}) => {
  const router = useRouter()
  const [projectName, setProjectNameValue] = useState('')
  const [isValidButtonVisible, setIsValidButtonVisible] = useState(false)

  console.log(state.nftFormReducers)
  console.log('Can be submit ', state.nftFormReducers.formCanBeSubmit)

  const [formValues, setFormValues] = useState({
    name: edit ? state.nftProjectsReducers.currentNFTProject?.name : '',
    description: edit
      ? state.nftProjectsReducers.currentNFTProject?.description
      : '',
    websiteLink: edit
      ? state.nftProjectsReducers.currentNFTProject?.websiteLink
      : '',
    whitePaperLink: edit
      ? state.nftProjectsReducers.currentNFTProject?.whitePaperLink
      : '',
    twitterLink: edit
      ? state.nftProjectsReducers.currentNFTProject?.twitterLink
      : '',
    networkOwnerRewards: edit
      ? state.nftProjectsReducers.currentNFTProject?.networkOwnerRewards
      : '',
    addressOwnerRewards: edit
      ? state.nftProjectsReducers.currentNFTProject?.addressOwnerRewards
      : '',
    tags: [],
  })

  useEffect(() => {
    if (state.nftFormReducers.existingNFTProject.length > 0) {
      setFormValues({
        ...formValues,
        name: '',
      })
    }
  }, [state.nftFormReducers.existingNFTProject])

  const handleCheckIfExist = () => {
    checkIfProjectExist(projectName)
    setIsValidButtonVisible(!isValidButtonVisible)
  }

  useEffect(() => {
    return () => {
      cleanReducers()
    }
  }, [])

  return (
    <ConnectFormWrapper>
      <Formik
        enableReinitialize={true}
        initialValues={formValues}
        validationSchema={Yup.object({
          name: Yup.string().required('Veuillez renseigner le nom du token.'),
        })}
        onSubmit={async (values, actions) => {
          console.log('Je submiiiiit')
          try {
            if (edit) {
              await editNFTProject(
                values,
                state.nftProjectsReducers.currentNFTProject?.id
              )
              router.push(
                `/nft/${state.nftProjectsReducers.currentNFTProject?.id}`
              )
            } else {
              await addNFTProject(values)
              router.push('/nfts')
            }
          } catch (error) {
            console.log(error)
          }
        }}
      >
        {(formik) => (
          <form className="form-container" onSubmit={formik.handleSubmit}>
            <StyledText h2 karla regular center>
              {edit ? 'Edit the project' : 'Add a new project'}
            </StyledText>
            <HorizontalMargin m1 />

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
                onChange={(e) => {
                  formik.handleChange(e)
                  setProjectNameValue(e.target.value)
                  setIsValidButtonVisible(true)
                  cleanReducers()
                }}
                placeholder="Ex: Ethereum"
              />
              <StyledText color="red">
                <ErrorMessage name="name" />
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
              </>
            )}

            {state.nftFormReducers.loading ? (
              <LoadingSpinner />
            ) : edit || state.nftFormReducers.formCanBeSubmit ? (
              <>
                <div className="input-wrapper">
                  <StyledText h5 mono regular>
                    DESCRIPTION
                  </StyledText>
                  <Field
                    {...formik.getFieldProps('description')}
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
                    {...formik.getFieldProps('websiteLink')}
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
                    {...formik.getFieldProps('whitePaperLink')}
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
                    {...formik.getFieldProps('twitterLink')}
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
                    {...formik.getFieldProps('test')}
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

                {(!edit ||
                  (state.usersReducers.currentUser &&
                    state.usersReducers.currentUser.uid ==
                      state.nftProjectsReducers.currentNFTProject
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
                        {...formik.getFieldProps('networkOwnerRewards')}
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
                        {...formik.getFieldProps('addressOwnerRewards')}
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
              ''
            )}
          </form>
        )}
      </Formik>
    </ConnectFormWrapper>
  )
}

export default NFTProjectForm
