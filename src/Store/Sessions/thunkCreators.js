import {
  handleLoading,
  userSignUp,
  userSignIn,
  userSignOut,
} from "./sessionReducer";
import { clearSession, getToken } from "../utils/session";
import { updateNotification } from "../Notification";

const baseURL = "https://steve95-shoppingify.herokuapp.com/";

export const handleSignIn = (username, password) => async (dispatch) => {
  const userDetails = { user: { username, password } };
  dispatch(handleLoading(true));
  const postDetails = await fetch(`${baseURL}/users/sign_in`, {
    method: "POST",
    body: JSON.stringify(userDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await postDetails.json();
  const token = postDetails.headers.get("Authorization");
  if (token) {
    localStorage.setItem("user-token", JSON.stringify(token));
    localStorage.setItem("session", true);
    dispatch(userSignIn());
    dispatch(updateNotification(response.message, response.status));
  } else {
    dispatch(updateNotification(response.message, response.status));
  }
  dispatch(handleLoading(false));
};

export const handleSignUp = (username, email, password) => async (dispatch) => {
  const userDetails = { user: { username, email, password } };
  dispatch(handleLoading(true));
  const postDetails = await fetch(`${baseURL}/users`, {
    method: "POST",
    body: JSON.stringify(userDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const serverResponse = await postDetails.json();
  const userToken = postDetails.headers.get("Authorization");
  if (userToken) {
    dispatch(userSignUp(serverResponse.message, true, serverResponse.status));
  } else {
    dispatch(userSignUp(serverResponse.message, false, serverResponse.status));
  }
  dispatch(handleLoading(false));
};

export const handleSignOut = () => async (dispatch) => {
  const userToken = getToken();
  dispatch(handleLoading(true));
  const details = await fetch(`${baseURL}/users/sign_out`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: userToken,
    },
  });
  const response = await details.json();
  dispatch(userSignOut());
  dispatch(updateNotification(response.message, response.status));
  clearSession();
  dispatch(handleLoading(false));
};
