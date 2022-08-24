const NEW_NOTIFICATION = "store/Notification/NEW_NOTIFICATION";

const initialState = {
  notification: "Welcome to Shoppingify",
  notificationStatus: 200,
};

export const updateNotification = (message, status) => ({
  type: NEW_NOTIFICATION,
  payload: { message, status },
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_NOTIFICATION:
      return {
        notification: action.payload.message,
        notificationStatus: action.payload.status,
      };
    default:
      return state;
  }
};

export default notificationReducer;
