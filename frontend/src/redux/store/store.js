import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer } from "../reducers/userReducers";
import { noteCreateReducer, notesListReducer } from "../reducers/notesReducer";

const reducer = combineReducers({
	// Reducers will be here
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	notesList: notesListReducer,
	noteCreate: noteCreateReducer
})

const userInfoFromStorage = localStorage.getItem("userInfo")
	? JSON.parse(localStorage.getItem("userInfo"))
	: null;

const initialState = {
	userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

