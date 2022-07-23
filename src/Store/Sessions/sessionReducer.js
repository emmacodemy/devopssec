import { getToken } from "../utils/session"


const SIGN_UP = "store/sessions/USER_SIGN_UP";
const SIGN_IN = "store/sessions/USER_SIGN_IN";
const FETCHING_STATUS = "store/sessions/FETCHING_STATUS";
const SIGN_OUT = "store/sessions/USER_SIGN_OUT";

const initialState = {
  isLoading: false,
  isSignedUp: false,
  isSignedIn: !!getToken(),
  message: "",
};

export const handleLoading = (status) => ({
  type: FETCHING_STATUS,
  payload: status,
});

export const userSignUp = (message, status) => ({
  type: SIGN_UP,
  payload: { status, message },
});

export const userSignIn = (message, status) => ({
  type: SIGN_IN,
  payload: { message, status },
});

const sessionReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_STATUS: 
            return {
                ...state,
                isLoading: action.payload
            }
        case SIGN_UP:
            return {
                ...state,
                message: action.payload.message,
                isSignedUp: action.payload.status
            }
        case SIGN_IN: {
            return {
                ...state,
                message: action.payload.message,
                isSignedIn: action.payload.status
            }
        }
        default:
          return state
    }
}

export default sessionReducer