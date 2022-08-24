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
  status: 200,
};

export const handleLoading = (status) => ({
  type: FETCHING_STATUS,
  payload: status,
});

export const userSignUp = (status) => ({
  type: SIGN_UP,
  payload: status,
});

export const userSignIn = () => ({
  type: SIGN_IN,
});

export const userSignOut = () => ({
  type: SIGN_OUT,
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
        isSignedUp: action.payload,
      };
    case SIGN_IN: {
      return {
        ...state,
        isSignedIn: !!getToken(),
      };
    }
    case SIGN_OUT: {
      return {
        ...state,
        isSignedOut: true,
        isSignedIn: false,
      };
    }
    default:
      return state;
  }
};

export default sessionReducer;
