export const todoActionTypes = {
  ADD: "ADD",
  DELETE: "DELETE",
  DELETE_ALL: "DELETE_ALL",
  EDIT: "EDIT",
  COMPLETED:"COMPLETED"
};
const initialState = [];
export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case todoActionTypes.ADD:
      return [
        ...state,

        {
          id: Date.now().toString(),
          text: action.payload,
          completed:false
        },
      ];
    case todoActionTypes.DELETE:
      return state.filter((item) => item.id !== action.payload);


      case todoActionTypes.COMPLETED:
        return state.map((item)=>{
            if(item.id === action.payload) {
              return {
                ...item,
                completed: !item.completed
              }
            }
            return item
          });
    case todoActionTypes.DELETE_ALL:
      return [];

    case todoActionTypes.EDIT:
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            text: action.value,
          };
        }
        return item;
      });

    default:
      return state;
  }
};


