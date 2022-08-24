import { updateNotification } from "../Notification";
import { getToken } from "../utils/session";
import {
  getItems,
  handleLoading,
  getItemDetails,
  deleteItem,
  loadingDetails,
  addItem,
  fetchCategories,
  addNewCategory,
} from "./pageReducer";

const baseURL = "https://steve95-shoppingify.herokuapp.com/";

export const fetchItems = () => async (dispatch) => {
  const token = getToken();
  dispatch(handleLoading(true));
  const allItems = await fetch(`${baseURL}/api/v1/item_category`, {
    headers: { Authorization: token },
  });
  const response = await allItems.json();
  dispatch(getItems(response.data));
  dispatch(handleLoading(false));
};

export const fetchItemDetails = (id) => async (dispatch) => {
  dispatch(loadingDetails(true));
  const itemDetails = await fetch(`${baseURL}/api/v1/item_category/${id}`);
  const response = await itemDetails.json();
  dispatch(getItemDetails(response.data));
  dispatch(loadingDetails(false));
};

export const deleteItemFromAPI = (category, id) => async (dispatch) => {
  dispatch(loadingDetails(true));
  const itemDetails = await fetch(`${baseURL}/api/v1/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await itemDetails.json();
  if (response.status === 200) {
    dispatch(deleteItem(category, id));
  }
  dispatch(updateNotification(response.message, response.status));
  dispatch(loadingDetails(false));
};

export const addNewItem =
  (name, image, description, measurement_unit, category_name) =>
  async (dispatch) => {
    dispatch(loadingDetails(true));
    if (image === "") {
      image =
        "https://res.cloudinary.com/duj88gras/image/upload/v1660563933/default_nnor2h.png";
    }
    const userToken = getToken();
    const new_item = { name, image, description, measurement_unit };
    const newItemParams = { category_name, new_item };
    const postItem = await fetch(`${baseURL}/api/v1/item_category`, {
      method: "POST",
      body: JSON.stringify(newItemParams),
      headers: {
        "Content-Type": "application/json",
        Authorization: userToken,
      },
    });
    const response = await postItem.json();
    if (response.data) {
      dispatch(addItem(response));
      dispatch(addNewCategory(response.data.category));
    }
    dispatch(updateNotification(response.message, response.status));
    dispatch(loadingDetails(false));
  };

export const getAllCategory = () => async (dispatch) => {
  const category = await fetch(`${baseURL}/api/v1/categories`);
  const response = await category.json();
  if (response.status === 200) {
    dispatch(fetchCategories(response.data));
  }
};
