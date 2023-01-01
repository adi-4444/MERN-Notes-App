import { NOTES_CREATE_FAIL, NOTES_CREATE_REQUEST, NOTES_CREATE_SUCCESS, NOTES_LIST_FAIL, NOTES_LIST_REQUEST, NOTES_LIST_SUCCESS } from "../constants/notesConstants"

export const notesListReducer = (state = { notes: [] }, action) => {
   switch (action.type) {
      case NOTES_LIST_REQUEST:
         return { loading: true }
      case NOTES_LIST_SUCCESS:
         return { loading: false, notes: action.payload }
      case NOTES_LIST_FAIL:
         return { loading: false, errorMessage: action.payload }
      default:
         return state
   }
}

export const noteCreateReducer = (state = { notes: [] }, action) => {
   switch (action.type) {
      case NOTES_CREATE_REQUEST:
         return { loading: true }
      case NOTES_CREATE_SUCCESS:
         return { loading: false, success: true }
      case NOTES_CREATE_FAIL:
         return { loading: false, errorMessage: action.payload }
      default:
         return state
   }
}