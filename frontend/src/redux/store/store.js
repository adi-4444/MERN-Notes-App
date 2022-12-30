import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer } from "../reducers/userReducers";

const reducer = combineReducers({
	// Reducers will be here
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer
})

const localUserName = localStorage.getItem("name") ? localStorage.getItem("name") : null
const localUserEmail = localStorage.getItem("email") ? localStorage.getItem("email") : null
const localUserToken = localStorage.getItem("token") ? localStorage.getItem("token") : null

const initialState = {
	userLogin: {
		name: localUserName,
		email: localUserEmail,
		token: localUserToken
	}
};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

