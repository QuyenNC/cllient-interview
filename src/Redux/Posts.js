

const initState = {
  posts: [],
  postsFilter : [],
  minValue : 0,
  maxValue : 8,
  numEachPage : 8
};

export const SET_DATA = "SET_DATA";


const CHANGE_PAGINATION = "CHANGE_PAGINATION";

export const handleChangPagination = (value) =>({
  type : CHANGE_PAGINATION,
  payload : value
});


const SEARCH_POST = "SEARCH_POST";
export const searchPost = (text) =>(
  {
  type : SEARCH_POST,
  payload : text
}
);
const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        posts: [...action.payload],
        postsFilter: [...action.payload]
      };
    case CHANGE_PAGINATION:
      return {
        ...state,
        minValue : (action.payload - 1) * state.numEachPage,
        maxValue : action.payload  * state.numEachPage
      };
      case SEARCH_POST:
        return {
          ...state,
          postsFilter : [...state.posts.filter(item => (
           item.title.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1
          ))]
        };
    default:
      return state;
  }
};
export default reducer;
