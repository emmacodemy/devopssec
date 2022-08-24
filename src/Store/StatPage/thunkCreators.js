import { loadingStatus, getStatistics } from "./Statisticsreducer"
import { getToken } from "../utils/session";

const baseURL = "https://steve95-shoppingify.herokuapp.com/";

export const fetchStatistics = () => async(dispatch) => {
    const token = getToken();
    dispatch(loadingStatus(true));
    const stats = await fetch(`${baseURL}/api/v1/cart_lists`, {
      headers: { Authorization: token },
    });
    const response = await stats.json();
    dispatch(getStatistics(response.data));
    dispatch(loadingStatus(false));
}