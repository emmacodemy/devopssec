import {
  createCart,
  loadingStatus,
  addItemToCart,
  deleteFromCart,
  completeCart,
} from "./cartreducer";
import { updateNotification } from "../Notification";
import { getToken } from "../utils/session";

const baseURL = "https://steve95-shoppingify.herokuapp.com/";

export const updateCartName =
  (name = "", status = "", active = true, id) =>
  async (dispatch) => {
    const userToken = getToken();
    dispatch(loadingStatus(true));
    const cart = { update_cart: { name, status, active } };
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
  (product_name, product_category, measurement_unit) => async (dispatch) => {
    const userToken = getToken();
    dispatch(loadingStatus(true));
    const cart_list = {
      new_cart_list: {
        product_name,
        product_category,
        measurement_unit,
        quantity: 1,
      },
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
          measurement_unit,
          response.data.id,
          response.data.cart_id
        )
      );
    }
    dispatch(updateNotification(response.message, response.status));
    dispatch(loadingStatus(false));
  };

export const deleteItemFromCart = (category, id) => async (dispatch) => {
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
};

const updateQuantity = async (id, quantity) => {
  const userToken = getToken();
  const details = { updated_cart_list: { quantity } };
  const { postCart } = await fetch(`${baseURL}/api/v1/cart_lists/${id}`, {
    method: "PATCH",
    body: JSON.stringify(details),
    headers: {
      "Content-Type": "application/json",
      Authorization: userToken,
    },
  });
  return postCart;
};

const flattenCart = (cart) => {
  const items = cart.map((value) => value.items);
  const allItems = items.reduce((acc, value) => [...acc, ...value]);
  return allItems;
};

export const updateCartItems = (cartItems) => async (dispatch) => {
  const cart = flattenCart(cartItems);
  const updateItems = cart.map((item) =>
    updateQuantity(item.id, item.quantity)
  );
  dispatch(loadingStatus(true));
  await Promise.all(updateItems);
  dispatch(loadingStatus(false));
};

const deleteItem = async (id) => {
  const userToken = getToken();
  const { deleteCartItem } = await fetch(`${baseURL}/api/v1/cart_lists/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: userToken,
    },
  });
  return deleteCartItem;
};

export const completeCartShopping = (cartItems) => async (dispatch) => {
  const cart = flattenCart(cartItems);
  const editedItems = cart.filter((item) => item.selected === true);
  if (editedItems.length > 0) {
    dispatch(loadingStatus(true));
    const deleteSelected = editedItems.map((item) => deleteItem(item.id));
    const deleted = await Promise.all(deleteSelected);
    console.log(deleted);
  }
  dispatch(completeCart());
  dispatch(loadingStatus(false));
};
