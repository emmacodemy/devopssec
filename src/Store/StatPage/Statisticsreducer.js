const GET_STATS = "store/statPage/statisticsreducer/GET_STATS";
const ISLOADING = "store/statPage/statisticsreducer/ISLOADING";

const initialState = {
  itemStats: [],
  categoryStats: [],
  loading: false,
  totalCount: 0,
};

const sortStatistics = (object) => {
  const sortedArray = Object.keys(object)
    .sort((a, b) => object[b] - object[a])
    .map((key) => ({ name: key, value: object[key] }));
  return sortedArray.slice(0, 3);
};

export const getStatistics = (data) => ({
  type: GET_STATS,
  payload: data,
});

export const loadingStatus = (payload) => ({
  type: ISLOADING,
  payload,
});

const statisticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ISLOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_STATS:
      return {
        ...state,
        itemStats: sortStatistics(action.payload.items),
        categoryStats: sortStatistics(action.payload.category),
        totalCount: action.payload.total,
      };
    default:
      return state;
  }
};

export default statisticsReducer;
