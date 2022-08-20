const GET_CARTS = "store/historyPage/historyReducer/GET_CARTS"
const LOADING = "store/historyPage/historyReducer/LOADING"

const initialState = {
    history: {},
    isLoading: false,
}

export const loading = (payload) => ({
    type: LOADING,
    payload
})

export const fetchCarts = (data) => ({
    type: GET_CARTS,
    payload: data
})

const historyReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_CARTS:
            return {
                ...state,
                history: action.payload
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