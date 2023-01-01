import axios from 'axios'
import { NOTES_CREATE_FAIL, NOTES_CREATE_REQUEST, NOTES_CREATE_SUCCESS, NOTES_LIST_FAIL, NOTES_LIST_REQUEST, NOTES_LIST_SUCCESS } from '../constants/notesConstants'

export const listNotes = () => async (dispatch, getState) => {
   try {
      dispatch({
         type: NOTES_LIST_REQUEST,
      })
      const {
         userLogin: { userInfo }
      } = getState()
      const config = {
         headers: {
            Authorization: `Bearer ${userInfo.token}`
         }
      }
      const { data } = await axios.get(`/api/notes`, config)
      dispatch({
         type: NOTES_LIST_SUCCESS,
         payload: data
      })
   }
   catch (error) {
      dispatch({
         type: NOTES_LIST_FAIL,
         payload: error?.response?.data?.message || error?.message
      })
   }
}

export const createNote = (title, content) => async (dispatch, getState) => {
   const inputData = { title, content }

   try {
      dispatch({
         type: NOTES_CREATE_REQUEST,
      })
      const {
         userLogin: { userInfo }
      } = getState()
      const config = {
         headers: {
            Authorization: `Bearer ${userInfo.token}`
         }
      }
      const { data } = await axios.post(`/api/notes/create`, inputData, config)
      dispatch({
         type: NOTES_CREATE_SUCCESS,
         payload: data
      })
   }
   catch (error) {
      dispatch({
         type: NOTES_CREATE_FAIL,
         payload: error?.response?.data?.message || error?.message
      })
   }
}