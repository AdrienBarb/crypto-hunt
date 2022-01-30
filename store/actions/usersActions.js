import axios from 'axios'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT = 'LOGOUT'
export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'

export const GET_ALL_USERS_REQUEST = 'GET_ALL_USERS_REQUEST'
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS'

export const loginApiCall = (userData, history, direction) => async (
  dispatch
) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post('/login_check', userData, config)

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    })

    dispatch({
      type: SUCCESS,
      payload: 'Vous êtes connecté !',
    })

    const goToPreviousPath = (history) => {
      history.push(localStorage.getItem('prevPath'))
      localStorage.removeItem('prevPath')
    }

    localStorage.setItem('userData', JSON.stringify(data))
    localStorage.getItem('prevPath')
      ? goToPreviousPath(history)
      : history.push('/')
  } catch (error) {
    dispatch({
      type: ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const loginHumhub = (history) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    })

    const { data } = await axios.get('calendrier-ouvert/login/index', {
      baseURL: '/',
    })

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    })

    dispatch({
      type: SUCCESS,
      payload: 'Vous êtes connecté !',
    })

    localStorage.setItem('userData', JSON.stringify(data))
    history.push(history.location?.state?.prevPath?.pathname ?? '/')
  } catch (error) {
    dispatch({
      type: ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const logout = () => async (dispatch) => {
  localStorage.removeItem('userData')
  dispatch({
    type: LOGOUT,
  })
}

export const registerApiCall = (userData, history, direction) => async (
  dispatch
) => {
  try {
    dispatch({
      type: REGISTER_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post('/users', userData, config)

    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    })

    dispatch({
      type: SUCCESS,
      payload: 'Votre compte a bien été créé !',
    })

    const goToPreviousPath = (history) => {
      history.push(localStorage.getItem('prevPath'))
      localStorage.removeItem('prevPath')
    }

    localStorage.setItem('userData', JSON.stringify(data))
    localStorage.getItem('prevPath')
      ? goToPreviousPath(history)
      : history.push('/')
  } catch (error) {
    dispatch({
      type: ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getAllUsers = (query) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_USERS_REQUEST,
    })

    const token = JSON.parse(localStorage.getItem('userData')).token
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      params: {
        page: query.page ? query.page : null,
        pagination: true,
        email: query.search ? query.search : null,
      },
    }

    const { data } = await axios.get('/users', config)

    dispatch({
      type: GET_ALL_USERS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
