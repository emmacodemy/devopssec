import { createCart, loadingStatus } from "./cartreducer";
import { getToken } from "../utils/session";

const baseURL = "http://localhost:3000";

export const createNewCart = (name) => async (dispatch) => {
  const userToken = getToken();
  dispatch(loadingStatus(true));
  const cart = { new_cart: { name } };
  const postCart = await fetch(`${baseURL}/api/v1/carts`, {
    method: "POST",
    body: JSON.stringify(cart),
    headers: {
      "Content-Type": "application/json",
      Authorization: userToken,
    },
  });
  const response = await postCart.json();
  dispatch(createCart(response.data.name));
  dispatch(loadingStatus(false));
};
