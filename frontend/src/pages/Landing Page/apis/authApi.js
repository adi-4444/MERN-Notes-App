import axios from 'axios'

const host = '/api/users';

const config = {
   headers: {
      'Content-Type': 'application/json',
   },
}

// function to create/register new user
export const registerUser = async (data) => {
   const postUrl = `${host}/signup`
   return await axios.post(postUrl, data);
}

// function to login user
export const loginUser = async (data) => {
   const postUrl = `${host}/signin`
   return await axios.post(postUrl, data, config);
}
