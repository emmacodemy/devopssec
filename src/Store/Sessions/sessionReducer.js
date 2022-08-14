import { getToken } from "../utils/session";

const SIGN_UP = "store/sessions/USER_SIGN_UP";
const SIGN_IN = "store/sessions/USER_SIGN_IN";
const FETCHING_STATUS = "store/sessions/FETCHING_STATUS";
const SIGN_OUT = "store/sessions/USER_SIGN_OUT";

const initialState = {
  isLoading: false,
  isSignedUp: false,
  isSignedIn: !!getToken(),
  isSignedOut: false,
  sessionMessage: "Welcome to Shoppingify",
  status: 200
};

export const handleLoading = (status) => ({
  type: FETCHING_STATUS,
  payload: status,
});

export const userSignUp = (message, status, serverStatus) => ({
  type: SIGN_UP,
  payload: { status, message, serverStatus },
});

export const userSignIn = (message, serverStatus) => ({
  type: SIGN_IN,
  payload: {message, serverStatus},
});

export const userSignOut = (message, serverStatus) => ({
  type: SIGN_OUT,
  payload: {message, serverStatus},
});

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_STATUS:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SIGN_UP:
      return {
        ...state,
        sessionMessage: action.payload.message,
        isSignedUp: action.payload.status,
        status:action.payload.serverStatus
      };
    case SIGN_IN: {
      return {
        ...state,
        sessionMessage: action.payload.message,
        isSignedIn: !!getToken(),
        status: action.payload.serverStatus,
      };
    }
    case SIGN_OUT: {
      return {
        ...state,
        sessionMessage: action.payload.message,
        isSignedOut: true,
        isSignedIn: false,
        status:action.payload.serverStatus
      };
    }
    default:
      return state;
  }
};

export default sessionReducer;
