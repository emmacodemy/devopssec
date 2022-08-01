const GET_ITEMS = "store/itemsreducer/GET_ITEMS";
const FETCH_ITEMS_STATUS = "store/itemsreducer/FETCH_ITEMS_STATUS";
const GET_ITEM_DETAILS = "store/itemsreducer/GET_ITEMS_DETAILS";
const FETCHING_DETAILS = "store/itemsreducer/FETCHING_DETAILS";
const DELETE_ITEM = "store/itemsreducer/DELETE_ITEM";
const ADD_NEW_ITEM = "store/itemsreducer/ADD_NEW_ITEM";
const FETCH_CATEGORY = "store/itemsreducer/FETCH_CATEGORY"

const initialState = {
  isLoading: false,
  loadingItems: false,
  categories: [],
  list: [],
  itemDetails: {},
};

const handleDeleteItem = (state, payload) => {
  // const item = state.list.find(
  //   (item) => item.category.toLowerCase() === payload.category.toLowerCase()
  // );
  // item.items.filter((item) => item.id !== payload.id);
  // return state;
};

export const handleLoading = (status) => ({
  type: FETCH_ITEMS_STATUS,
  payload: status,
});

export const loadingDetails = (status) => ({
  type: FETCHING_DETAILS,
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

export const deleteItem = (category, id) => ({
  type: DELETE_ITEM,
  payload: { category, id },
});

export const AddItem = (newItem) => ({
  type: ADD_NEW_ITEM,
  payload: newItem,
});

export const fetchCategories =(categories) => ({
  type: FETCH_CATEGORY,
  payload: categories,
})

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_STATUS:
      return {
        ...state,
        isLoading: action.payload,
      };

    case FETCHING_DETAILS:
      return {
        ...state,
        loadingItems: action.payload,
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

    case DELETE_ITEM:
      const itemIndex = state.list.findIndex(
        (item) =>
          item.category.toLowerCase() === action.payload.category.toLowerCase()
      );
      const newItem = state.list[itemIndex].items.filter(
        (item) => item.id !== action.payload.id
      );
      state.list[itemIndex].items = newItem;
      return state;

    case ADD_NEW_ITEM:
      const findCategoryIndex = state.list.findIndex(
        (item) =>
          item.category.toLowerCase() === action.payload.category.toLowerCase()
      );
      if (findCategoryIndex) {
        const existingItems = state.list[findCategoryIndex].items;
        const newItems = [...existingItems, action.payload.item];
        state.list[findCategoryIndex].items = newItems;
        return state;
      } else {
        const list = state.list;
        const newList = [
          ...list,
          {
            category: action.payload.category,
            items: [action.payload.item],
          },
        ];
        return newList;
      }
    case FETCH_CATEGORY:
      return {
        ...state,
        categories: action.payload
      }
    default:
      return state;
  }
};

export default itemsReducer;
