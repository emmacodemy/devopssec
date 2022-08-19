const GET_CARTS = "store/historyPage/historyReducer/GET_CARTS"
const LOADING = "store/historyPage/historyReducer/LOADING"

const initialState = {
    carts: [],
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
                carts: action.payload
            }
    }
}