const LOADING = "store/cartreducer/LOADING";
const ADD_TO_CART = "store/cartreducer/ADD_TO_CART";

const countItems = (items) => {
  let totalCount = 0;
  items.length > 0 &&
    items.forEach((item) => {
      totalCount += item.items.length;
    });
  return totalCount;
};

const initialState = {
  editingState: false,
  isLoading: false,
  cartName: "",
  cartStatus: "",
  cartItems: [{ category: "Protein", items: [{ quantity: 1, name: "spag" }] }],
  countCart: 0,
};

export const loadingStatus = (payload) => ({
  type: LOADING,
  payload,
});

export const addItemToCart = (categoryName, itemId, itemName, unit) => ({
  type: ADD_TO_CART,
  payload: {
    category: categoryName,
    items: { itemName, itemId, unit },
  },
});

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        payload: action.payload,
      };
    case ADD_TO_CART:
      const list = state.cartItems;
      const getIndex = list.findIndex(
        (item) =>
          item.category.toLowerCase() === action.payload.category.toLowerCase()
      );
      if (getIndex >= 0) {
        let items = list[getIndex].items;
        let newItems = [];
        const checkItem = items.filter(
          (item) => item.itemId === action.payload.items.itemId
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
              unit: action.payload.unit,
              quantity: 1,
              selected: false,
            },
          ];
          list[getIndex].items = newItems;
        }
        return {
          ...state,
          countCart: countItems(state.cartItems),
        };
      } else {
        const newList = [
          ...list,
          {
            category: action.payload.category,
            items: [
              {
                ...action.payload.items,
                unit: action.payload.unit,
                quantity: 1,
                selected: false,
              },
            ],
          },
        ];
        return {
          ...state,
          cartItems: newList,
          countCart: countItems(state.cartItems),
        };
      }

    default:
      return state;
  }
};

export default cartReducer;
