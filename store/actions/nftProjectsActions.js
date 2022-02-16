import {
  collection,
  onSnapshot,
  addDoc,
  getDoc,
  doc,
  updateDoc,
  orderBy,
  query,
  where,
  getDocs,
} from '@firebase/firestore'
import { db } from '../../firebase/clientApp'
export const SET_NFT_PROJECTS = 'SET_NFT_PROJECTS'
export const SET_CURRENT_NFT_PROJECT = 'SET_CURRENT_NFT_PROJECT'

export const getNFTProjects = () => async (dispatch) => {
  try {
    const collectionRef = collection(db, 'nftProjects')

    const q = query(collectionRef, orderBy('votesCounter', 'desc'))

    await onSnapshot(q, (querySnapshot) => {
      dispatch({
        type: SET_NFT_PROJECTS,
        payload: querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })),
      })
    })
  } catch (error) {
    console.log(error)
  }
}

export const addNFTProject = (nftProjectValues) => async (
  dispatch,
  getState
) => {
  const currentUser = getState().usersReducers.currentUser

  try {
    const nftProjectData = {
      name: nftProjectValues.name ? nftProjectValues.name : null,

      description: nftProjectValues.description
        ? nftProjectValues.description
        : null,
      websiteLink: nftProjectValues.websiteLink
        ? nftProjectValues.websiteLink
        : null,
      votesCounter: 0,
      voters: [],
      whitePaperLink: nftProjectValues.whitePaperLink
        ? nftProjectValues.whitePaperLink
        : null,
      twitterLink: nftProjectValues.twitterLink
        ? nftProjectValues.twitterLink
        : null,
      networkOwnerRewards: nftProjectValues.networkOwnerRewards
        ? nftProjectValues.networkOwnerRewards
        : null,
      addressOwnerRewards: nftProjectValues.addressOwnerRewards
        ? nftProjectValues.addressOwnerRewards
        : null,
      projectOwner: currentUser.uid,
      tags: nftProjectValues.tags ? nftProjectValues.tags : [],
    }
    const collectionRef = collection(db, 'nftProjects')
    await addDoc(collectionRef, nftProjectData)

    // if (nftProjectValues.tags.length) {
    //   createTags(nftProjectValues.tags)
    // }
  } catch (error) {}
}

export const editNFTProject = (nftProjectValues, id) => async (dispatch) => {
  try {
    const nftProjectData = {
      name: nftProjectValues.name ? nftProjectValues.name : null,
      description: nftProjectValues.description
        ? nftProjectValues.description
        : null,
      websiteLink: nftProjectValues.websiteLink
        ? nftProjectValues.websiteLink
        : null,
      whitePaperLink: nftProjectValues.whitePaperLink
        ? nftProjectValues.whitePaperLink
        : null,
      twitterLink: nftProjectValues.twitterLink
        ? nftProjectValues.twitterLink
        : null,
      networkOwnerRewards: nftProjectValues.networkOwnerRewards
        ? nftProjectValues.networkOwnerRewards
        : null,
      addressOwnerRewards: nftProjectValues.addressOwnerRewards
        ? nftProjectValues.addressOwnerRewards
        : null,
    }

    const docRef = doc(db, 'nftProjects', id)
    await updateDoc(docRef, { ...nftProjectData })
  } catch (error) {
    console.log(error)
  }
}

export const getCurrentNFTProject = (id) => async (dispatch) => {
  try {
    const docRef = doc(db, 'nftProjects', id)
    const docSnap = await getDoc(docRef)

    dispatch({
      type: SET_CURRENT_NFT_PROJECT,
      payload: { ...docSnap.data(), id: docSnap.id },
    })
  } catch (error) {}
}

export const voteUpForCryptoProject = (id) => async (dispatch, getState) => {
  const currentUser = getState().usersReducers.currentUser

  try {
    const docRef = doc(db, 'nftProjects', id)
    const docSnap = await getDoc(docRef)

    await updateDoc(docRef, {
      ...docSnap.data(),
      votesCounter: docSnap.data().votesCounter + 1,
      voters: [...docSnap.data().voters, currentUser.uid],
    })
  } catch (error) {
    console.log(error)
  }
}

export const voteDownForCryptoProject = (id) => async (dispatch, getState) => {
  const currentUser = getState().usersReducers.currentUser
  try {
    const docRef = doc(db, 'nftProjects', id)
    const docSnap = await getDoc(docRef)

    await updateDoc(docRef, {
      ...docSnap.data(),
      votesCounter:
        docSnap.data().votesCounter == 0 ? 0 : docSnap.data().votesCounter - 1,
      voters: [
        ...docSnap.data().voters.filter((voter) => voter !== currentUser.uid),
      ],
    })
  } catch (error) {}
}

const createTags = (tagsList) => {
  tagsList.forEach(async (tag) => {
    const collectionRef = collection(db, 'tags')
    const q = await query(collectionRef, where('name', '==', tag))
    const querySnapshot = await getDocs(q)
    if (querySnapshot.docs.length == 0) {
      await addDoc(collectionRef, { name: tag })
    }
  })
}
