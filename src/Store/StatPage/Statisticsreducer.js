const GET_STATS = "store/statPage/statisticsreducer/GET_STATS";
const ISLOADING = "store/statPage/statisticsreducer/ISLOADING";

const initialState = {
  itemStats: [],
  categoryStats: [],
  loading: false,
  graphData: [],
  totalCount: 0,
};

const sortStatistics = (object) => {
  const sortedArray = Object.keys(object)
    .sort((a, b) => object[b] - object[a])
    .map((key) => ({ name: key, value: object[key] }));
  return sortedArray.slice(0, 3);
};

const rechartData = (object) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const array = months.map((value) => {
    if (object[value] === undefined) {
      object[value] = 0;
    }
    return { month: value, itemCount: object[value] };
  });
  return array;
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
        graphData: rechartData(action.payload.created_at),
        totalCount: action.payload.total,
      };
    default:
      return state;
  }
};

export default statisticsReducer;
