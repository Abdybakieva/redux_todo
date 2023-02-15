export const actionsAuthTypes = {
  LOG_IN: "LOG_IN",
  LOG_OUT: "LOG_OUT",
};

const initialState = {
  email: "",
  isLogout: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsAuthTypes.LOG_IN:
      return {
        ...state,
        email: action.payload,
        isLogout: true,
      };
    case actionsAuthTypes.LOG_OUT:
      return initialState;
  }
};
