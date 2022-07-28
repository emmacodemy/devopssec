import { getToken } from "../utils/session";
import { getItems, handleLoading, getItemDetails, loadingDetails } from "./pageReducer";

const baseURL = "http://localhost:3000";

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
