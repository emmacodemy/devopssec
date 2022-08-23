const GET_CARTS = "store/historyPage/historyReducer/GET_CARTS"
const LOADING = "store/historyPage/historyReducer/LOADING"
const GET_CART_DETAILS = "store/historyPage/historyReducer/GET_CART_DETAILS"

const initialState = {
    history: {},
    isLoading: false,
    cartName: {},
    cartDetails: [],
}

export const loading = (payload) => ({
    type: LOADING,
    payload
})

export const fetchCarts = (data) => ({
    type: GET_CARTS,
    payload: data
})

export const showCartDetails = (data) => ({
    type: GET_CART_DETAILS,
    payload: data
})

const historyReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_CARTS:
            return {
                ...state,
                history: action.payload
            }
        case GET_CART_DETAILS:
            return {
                ...state,
                cartDetails: action.payload.cartDetails,
                cartName: action.payload.cartName
            }
        case LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}

export default historyReducer