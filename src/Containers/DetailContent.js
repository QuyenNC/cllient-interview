import { connect } from "react-redux";

import Detail from "../Page/Detail/Detail";


// import 
// FetchSinglePost
//  from '../Redux/Sagas/FetchSinglePost';

const mapStateToProps = (state) => {
  return {
    singlePost: state.singlePost.singlePost,
  };
};
const mapDispatchToProps = (dispatch) => ({
  FetchSinglePost: (id) => dispatch({type: 'FETCH_SINGLE_REQUESTED', payload: {id}}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
