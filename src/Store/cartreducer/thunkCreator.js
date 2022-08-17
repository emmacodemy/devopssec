import { createCart, loadingStatus, addItemToCart, deleteFromCart } from "./cartreducer";
import { updateNotification } from "../Notification"
import { getToken } from "../utils/session";

const baseURL = "https://steve95-shoppingify.herokuapp.com/";

export const updateCartName = (name, id) => async (dispatch) => {
  const userToken = getToken();
  dispatch(loadingStatus(true));
  const cart = { update_cart: { name } };
  const postCart = await fetch(`${baseURL}/api/v1/carts/${id}`, {
    method: "PATCH",
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

export const createNewCartItem =
  (product_name, product_category, unit) => async (dispatch) => {
    const userToken = getToken();
    dispatch(loadingStatus(true));
    const cart_list = {
      new_cart_list: { product_name, product_category, unit, quantity:1 },
    };
    const postItem = await fetch(`${baseURL}/api/v1/cart_lists`, {
      method: "POST",
      body: JSON.stringify(cart_list),
      headers: {
        "Content-Type": "application/json",
        Authorization: userToken,
      },
    });
    const response = await postItem.json();
    if (response.data) {
      dispatch(
        addItemToCart(
          product_category,
          response.data.quantity,
          product_name,
          unit,
          response.data.id,
          response.data.cart_id
        )
      );
    }
    dispatch(updateNotification(response.message, response.status))
    dispatch(loadingStatus(false));
  };

export const deleteItemFromCart = (category, id) => async(dispatch) => {
  const userToken = getToken();
  dispatch(loadingStatus(true));
  const itemDetails = await fetch(`${baseURL}/api/v1/cart_lists/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: userToken,
    },
  });
  const response = await itemDetails.json();
  if (response.status === 200) {
    dispatch(deleteFromCart(category, id));
  }
  dispatch(updateNotification(response.message, response.status));
  dispatch(loadingStatus(false));
}