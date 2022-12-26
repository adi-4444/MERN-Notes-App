import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constants/userConstants";
import axios from 'axios'

export const login = (email, password) = async (dispatch) => {

   const inputData = { email, password }

   try {

      dispatch({ type: USER_LOGIN_REQUEST })

      axios.post("/api/users/login",
         inputData
      ).then((res) => {
         const { data, status } = res;
         if (status === 200) {
            dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
            console.log(data)
            saveUserInfo(data)
         }
      })
         .catch((err) => {
            // if failure, i will show an error
            dispatch({
               type: USER_LOGIN_FAIL,
               payload: err?.response?.data?.message || err?.message
            })
            const errMsg = err?.response?.data?.message || err?.message;
            setErrorMessage(errMsg);

         });
   }
   catch (err) {
      // if failure, i will show an error
      dispatch({
         type: USER_LOGIN_FAIL,
         payload: err?.response?.data?.message || err?.message
      })
      const errMsg = err?.response?.data?.message || err?.message;
      setErrorMessage(errMsg);
      setLoading(false);
   }
}