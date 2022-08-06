const LOADING = "store/cartreducer/LOADING";
const ADD_TO_CART = "store/cartreducer/ADD_TO_CART";

const initialState = {
  isLoading: false,
  cartName: "",
  cartStatus: "",
  cartItems: [],
};

export const loadingStatus = (payload) => ({
  type: LOADING,
  payload,
});

export const addItemToCart = (categoryName, itemId, itemName) => ({
  type: ADD_TO_CART,
  payload: {
    category: categoryName,
    items: { itemName, itemId },
  },
});

const cartReducer = (state=  initialState, action) => {
    switch(action.type) {
        case LOADING:
            return {
                ...state,
                payload: action.payload,
            }
        case ADD_TO_CART: 
            const list = state.cartItems
            const getIndex = list.findIndex((item) => item.category.toLowerCase() === action.payload.category.toLowerCase())
            if(getIndex >= 0) {
                let items = list[getIndex].items
                let newItems = []
                const checkItem = items.filter((item) => item.itemId === action.payload.items.itemId)
                if (checkItem.length >= 1) {
                    const item = checkItem[0]
                    const updatedItem = {
                        ...item,
                        quantity: item.quantity++
                    }
                    newItems = [
                        ...items,
                        updatedItem
                    ]
                }
                else {
                    newItems = [
                        ...items,
                        {...action.payload.items, quantity:1, selected:false}
                    ]
                    list[getIndex].items = newItems
                }
                // items = newItems
                return state
            } else {
                const newList = [
                    ...list,
                    {
                      category: action.payload.category,
                      items: [{...action.payload.items, quantity: 1, selected: false}],
                    },
                  ];
                return {
                    ...state,
                    cartItems: newList,
                }
            }

        default:
            return state
    }
}

export default cartReducer


