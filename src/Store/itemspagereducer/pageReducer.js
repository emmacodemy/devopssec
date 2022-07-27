const GET_ITEMS = "store/itemsreducer/GET_ITEMS";
const FETCH_ITEMS_STATUS = "store/itemsreducer/FETCH_ITEMS_STATUS";
const GET_ITEM_DETAILS = "store/itemsreducer/GET_ITEMS_DETAILS";

const initialState = {
  isLoading: false,
  list: [],
  itemDetails: {},
};

export const handleLoading = (status) => ({
  type: FETCH_ITEMS_STATUS,
  payload: status,
});

export const getItems = (items) => ({
  type: GET_ITEMS,
  payload: items,
});

export const getItemDetails = (details) => ({
  type: GET_ITEM_DETAILS,
  payload: details,
});

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_STATUS:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GET_ITEMS:
      return {
        ...state,
        list: [...action.payload],
      };
    case GET_ITEM_DETAILS:
      return {
        ...state,
        itemDetails: action.payload,
      };
    default:
      return state;
  }
};

export default itemsReducer;
