import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants";
import axios from 'axios'
import { saveUserInfo } from "../../common/utils/helpers";

export const login = (email, password) => async (dispatch) => {
   const inputData = { email, password }
   try {
      dispatch({ type: USER_LOGIN_REQUEST })
      axios.post("/api/users/login",
         inputData
      ).then((res) => {
         const { data, status } = res;
         if (status === 200) {
            dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
            saveUserInfo(data)
         }
      })
         .catch((err) => {
            // if failure, i will show an error
            dispatch({
               type: USER_LOGIN_FAIL,
               payload: err?.response?.data?.message || err?.message
            })
         });
   }
   catch (err) {
      // if failure, i will show an error
      dispatch({
         type: USER_LOGIN_FAIL,
         payload: err?.response?.data?.message || err?.message
      })
   }
}

export const logout = () => async (dispatch) => {
   localStorage.clear();
   dispatch({ type: USER_LOGOUT })
}

export const register = (name, email, password) => async (dispatch) => {
   const inputData = { name, email, password }
   try {
      dispatch({ type: USER_REGISTER_REQUEST })
      axios.post('/api/users/signup', inputData)
         .then((res) => {
            const { data, status } = res
            if (status === 201) {
               alert(`${data.name} You are successfully Registered. Please Login`)
               dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
            }
         })
         .catch((err) => {
            dispatch({
               type: USER_REGISTER_FAIL,
               payload: err?.response?.data?.message || err?.message
            })
         });
   } catch (err) {
      dispatch({
         type: USER_REGISTER_FAIL,
         payload: err?.response?.data?.message || err?.message
      })
   }
}