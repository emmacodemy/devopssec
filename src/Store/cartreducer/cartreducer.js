const LOADING = "store/cartreducer/LOADING";
const ADD_TO_CART = "store/cartreducer/ADD_TO_CART";
const INCREASE_QUANTITY = "store/cartreducer/INCREASE_QUANTITY";
const DECREASE_QUANTITY = "store/cartreducer/DECREASE_QUANTITY";
const DELETE_FROM_CART = "store/cartreducer/DELETE_FROM_CART";
const EDIT_ITEM = "store/cartreducer/EDIT_ITEM";
const EDIT_STATE = "store/cartreducer/EDIT_STATE";
const CREATE_CART = "store/cartreducer/CREATE_CART";

const countItems = (items) => {
  let totalCount = 0;
  items.length > 0 &&
    items.forEach((item) => {
      totalCount += item.items.length;
    });
  return totalCount;
};

const getCategoryIndex = (list, payload) => {
  const index = list.findIndex(
    (item) => item.category.toLowerCase() === payload.category.toLowerCase()
  );
  return index;
};

const initialState = {
  editingState: false,
  isLoading: false,
  cartName: "",
  cartId: "",
  cartStatus: "",
  cartItems: [],
  countCart: 0,
  message: "",
};

export const loadingStatus = (payload) => ({
  type: LOADING,
  payload,
});

export const addItemToCart = (
  categoryName,
  quantity,
  itemName,
  unit,
  id,
  cartId
) => ({
  type: ADD_TO_CART,
  payload: {
    category: categoryName,
    items: { itemName, quantity, unit, id },
    cartId
  },
});

export const editItem = (category, id, status) => ({
  type: EDIT_ITEM,
  payload: { category, id, status },
});

export const increaseQuantity = (category, id) => ({
  type: INCREASE_QUANTITY,
  payload: { category, id },
});

export const decreaseQuantity = (category, id) => ({
  type: DECREASE_QUANTITY,
  payload: { category, id },
});

export const deleteFromCart = (category, id) => ({
  type: DELETE_FROM_CART,
  payload: { category, id },
});

export const editState = () => ({
  type: EDIT_STATE,
});

export const createCart = (name) => ({
  type: CREATE_CART,
  payload: name,
});

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case EDIT_STATE:
      return {
        ...state,
        editingState: !state.editingState,
      };
    case ADD_TO_CART:
      const list = state.cartItems;
      const getIndex = getCategoryIndex(state.cartItems, action.payload);
      // const getIndex = list.findIndex(
      //   (item) =>
      //     item.category.toLowerCase() === action.payload.category.toLowerCase()
      // );
      if (getIndex >= 0) {
        let items = list[getIndex].items;
        let newItems = [];
        const checkItem = items.filter(
          (item) => item.id === action.payload.items.id
        );
        if (checkItem.length >= 1) {
          const item = checkItem[0];
          const updatedItem = {
            ...item,
            quantity: item.quantity++,
          };
          newItems = [...items, updatedItem];
        } else {
          newItems = [
            ...items,
            {
              ...action.payload.items,
              selected: false,
            },
          ];
          list[getIndex].items = newItems;
        }
        return {
          ...state,
          countCart: countItems(state.cartItems),
          cartId: action.payload.cartId
        };
      } else {
        const newList = [
          ...list,
          {
            category: action.payload.category,
            items: [
              {
                ...action.payload.items,
                selected: false,
              },
            ],
          },
        ];
        return {
          ...state,
          cartItems: newList,
          countCart: countItems(state.cartItems),
          cartId: action.payload.cartId,
        };
      }
    case INCREASE_QUANTITY:
      const categoryIndex = getCategoryIndex(state.cartItems, action.payload);
      // const categoryIndex = state.cartItems.findIndex(
      //   (item) => item.category.toLowerCase() === action.payload.category.toLowerCase()
      // );
      state.cartItems[categoryIndex].items.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity++,
          };
        }
        return item;
      });
      return {
        ...state,
        cartItems: state.cartItems,
      };

    case DECREASE_QUANTITY:
      const itemCategoryIndex = getCategoryIndex(
        state.cartItems,
        action.payload
      );
      // const itemCategoryIndex = state.cartItems.findIndex(
      //   (item) => item.category.toLowerCase() === action.payload.tolowerCase()
      // );
      state.cartItems[itemCategoryIndex].items.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity--;
          if (item.quantity < 1) {
            item.quantity = 1;
          }
        }
        return item;
      });
      return {
        ...state,
        cartItems: state.cartItems,
      };
    case DELETE_FROM_CART:
      const index = getCategoryIndex(state.cartItems, action.payload);
      // const index = state.cartItems.findIndex(
      //   (item) => item.category.toLowerCase() === action.payload.tolowerCase()
      // );
      const updatedItem = state.cartItems[index].items.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems[index].items = updatedItem;
      const checkEmpty = state.cartItems.every(
        (item) => item.items.length === 0
      );
      if (checkEmpty) {
        return {
          ...state,
          cartItems: [],
        };
      } else {
        return {
          ...state,
          cartItems: state.cartItems,
        };
      }

    case EDIT_ITEM:
      const fetchIndex = getCategoryIndex(state.cartItems, action.payload);
      state.cartItems[fetchIndex].items.map((item) => {
        if (item.id === action.payload.id) {
          item.selected = action.payload.status;
        }
        return item;
      });
      return {
        ...state,
        cartItems: state.cartItems,
      };
    case CREATE_CART:
      return {
        ...state,
        cartName: action.payload,
        editingState: true,
      };

    default:
      return state;
  }
};

export default cartReducer;
