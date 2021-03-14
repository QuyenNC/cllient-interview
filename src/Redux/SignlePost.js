

const initState = {
    singlePost: {},
  };
  
  export const SET_SINGLE_POST = "SET_SINGLE_POST";
 
  const reducer = (state = initState, action) => {
    switch (action.type) {
      case SET_SINGLE_POST:
        return {
          ...state,
          singlePost: action.payload
        };
      
      default:
        return state;
    }
  };
  export default reducer;
  