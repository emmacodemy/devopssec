import { getToken } from "../utils/session";
import { getItems, handleLoading } from "./pageReducer";

const baseURL = "http://localhost:3000";

export const fetchItems = () => async (dispatch) => {
  const token = getToken();
  dispatch(handleLoading(true));
  const all_items = await fetch(`${baseURL}/api/v1/item_category`, {
    headers: { Authorization: token },
  });
  const response = await all_items.json();
  dispatch(getItems(response.data));
  dispatch(handleLoading(false));
};