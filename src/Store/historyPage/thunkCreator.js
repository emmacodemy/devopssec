import { fetchCarts, loading, showCartDetails } from "./historyreducer";
import { getToken } from "../utils/session";

const baseURL = "http://steve95-shoppingify.herokuapp.com/";

const reducerFunction = (data) => {
  const steven = data.reduce((acc, value) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date(value.created_at);
    const dateMonth = `${months[date.getMonth()]} ${date.getFullYear()}`;
    acc.hasOwnProperty(dateMonth)
      ? (acc[dateMonth] = [...acc[dateMonth], value])
      : (acc[dateMonth] = [value]);
    return acc;
  }, {});
  return steven;
};

export const getCarts = () => async (dispatch) => {
  const token = getToken();
  dispatch(loading(true));
  const allCarts = await fetch(`${baseURL}/api/v1/carts`, {
    headers: { Authorization: token },
  });
  const response = await allCarts.json();
  if (response.status === 200) {
    const data = reducerFunction(response.data);
    dispatch(fetchCarts(data));
  }
  dispatch(loading(false));
};

export const getCartDetails = (id) => async (dispatch) => {
  const token = getToken();
  dispatch(loading(true));
  const cartDetails = await fetch(`${baseURL}/api/v1/carts/${id}`, {
    headers: { Authorization: token },
  });
  const response = await cartDetails.json();
  if(response.status === 200) {
    dispatch(showCartDetails(response.data));
  }
  dispatch(loading(false));
};
