import React from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import { CardButton } from '../styles/StyledButton'
import { StyledText } from '../styles/StyledText'
import { StyledCryptoProjectDetails } from '../styles/StyledCryptoProjectDetails'
import { HorizontalDivider } from '../styles/StyledDivider'
import Colors from '../constants/Colors'
import { useRouter } from 'next/router'
import { FiEdit2 } from 'react-icons/fi'
import useMediaQuery from '@mui/material/useMediaQuery'
import { BsTwitter } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import { HiDocument } from 'react-icons/hi'
import { HorizontalMargin, VerticalMargin } from '../styles/StyledMargin'
import axios from 'axios'
import DetailsNumberCard from './DetailsNumberCard'
import Modal from './Modal'
import { useState } from 'react'
import EventForm from '../connects/EventForm'
import moment from 'moment'
import SectionHeader from './SectionHeader'
import { GrFormAdd } from 'react-icons/gr'
import EventCard from './EventCard'

const CryptoProjectDetails = ({
  projectId,
  getCurrentCryptoProject,
  state,
  getProjectNumbers,
  getCurrentCryptoProjectEvent,
}) => {
  const router = useRouter()
  const matches = useMediaQuery('(max-width:768px)')
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    getCurrentCryptoProject(projectId)
  }, [router])

  useEffect(() => {
    getProjectNumbers(state.cryptoProjectsReducers?.currentCryptoProject?.token)
  }, [state.cryptoProjectsReducers?.currentCryptoProject])

  useEffect(() => {
    if (projectId) {
      getCurrentCryptoProjectEvent(projectId)
    }
  }, [router])

  const handleShowModal = () => {
    setShowModal(true)
  }

  return (
    <StyledCryptoProjectDetails>
      {state.cryptoProjectsReducers.currentCryptoProject && (
        <SectionHeader
          title={`${state.cryptoProjectsReducers.currentCryptoProject.name} (${state.cryptoProjectsReducers.currentCryptoProject.token})`}
          buttonUrl={
            state.cryptoProjectsReducers.currentCryptoProject &&
            state.usersReducers.currentUser &&
            state.usersReducers.currentUser.uid ==
              state.cryptoProjectsReducers.currentCryptoProject.projectOwner &&
            `/edit-crypto-project/${projectId}`
          }
          buttonText="EDIT PROJECTS"
          ButtonIcon={() => <FiEdit2 size={16} color={Colors.yellow} />}
          currentUser={state.usersReducers.currentUser}
        />
      )}

      <StyledText karla>
        {state.cryptoProjectsReducers.currentCryptoProject?.description
          ? state.cryptoProjectsReducers.currentCryptoProject.description
          : '-'}
      </StyledText>

      <HorizontalMargin m2 />

      <div className="links-wrapper">
        {state.cryptoProjectsReducers.currentCryptoProject?.twitterLink && (
          <>
            <Link
              href={
                state.cryptoProjectsReducers.currentCryptoProject.twitterLink
              }
            >
              <a target="_blank">
                <BsTwitter size={22} />
              </a>
            </Link>
            <VerticalMargin m4 />
          </>
        )}
        {state.cryptoProjectsReducers.currentCryptoProject?.websiteLink && (
          <>
            <Link
              href={
                state.cryptoProjectsReducers.currentCryptoProject.websiteLink
              }
            >
              <a target="_blank">
                <CgWebsite size={22} />
              </a>
            </Link>
            <VerticalMargin m4 />
          </>
        )}
        {state.cryptoProjectsReducers.currentCryptoProject?.whitePaperLink && (
          <Link
            href={
              state.cryptoProjectsReducers.currentCryptoProject.whitePaperLink
            }
          >
            <a target="_blank">
              <HiDocument size={22} />
            </a>
          </Link>
        )}
      </div>
      <HorizontalMargin m2 />

      {state.cryptoProjectsReducers.currentCryptoProject?.networkOwnerRewards &&
        state.cryptoProjectsReducers.currentCryptoProject
          ?.addressOwnerRewards && (
          <div className="bottom-card">
            <div>
              <StyledText>
                Send tips to this adress, to thanks the people who discovered
                the project:
              </StyledText>
              <StyledText>
                Network:{' '}
                {
                  state.cryptoProjectsReducers.currentCryptoProject
                    .networkOwnerRewards
                }
              </StyledText>
              <StyledText>
                Adress:{' '}
                {
                  state.cryptoProjectsReducers.currentCryptoProject
                    .addressOwnerRewards
                }
              </StyledText>
            </div>
          </div>
        )}

      <HorizontalMargin m1 />

      <SectionHeader
        title="Events"
        buttonAction={
          state.cryptoProjectsReducers.currentCryptoProject &&
          state.usersReducers.currentUser &&
          state.usersReducers.currentUser.uid ==
            state.cryptoProjectsReducers.currentCryptoProject.projectOwner &&
          handleShowModal
        }
        buttonText="ADD EVENTS"
        ButtonIcon={() => <GrFormAdd size={22} color={Colors.yellow} />}
      />

      <div className="crypto-events-wrapper">
        {state.cryptoEventsReducers.cryptoEvents.length > 0 &&
          state.cryptoEventsReducers.cryptoEvents.map((cryptoEvent) => {
            return (
              <Link href={cryptoEvent.link ? cryptoEvent.link : ''}>
                <a target="_blank">
                  <EventCard
                    eventType={cryptoEvent.eventType}
                    otherEventType={cryptoEvent.otherEventType}
                    eventDate={cryptoEvent.eventDate}
                  />
                </a>
              </Link>
            )
          })}
      </div>

      <Modal
        visible={showModal}
        setShowModal={setShowModal}
        modalTitle="Add an event"
      >
        <EventForm
          project={state.cryptoProjectsReducers?.currentCryptoProject}
          setShowModal={setShowModal}
          showModal={showModal}
        />
      </Modal>
    </StyledCryptoProjectDetails>
  )
}

export default CryptoProjectDetails
