import { connect } from "react-redux";

import Content from "../Page/Index/Content";
import {  handleChangPagination, searchPost } from "../Redux/Posts";

import 
  fetchPosts
 from '../Redux/Sagas/FetchPosts';

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    postsFilter: state.posts.postsFilter,
    minValue : state.posts.minValue,
    maxValue : state.posts.maxValue,
    numEachPage : state.posts.numEachPage
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => fetchPosts(),
  handleChangPagination : (value) => dispatch(handleChangPagination(value)),
  searchPost: (value) => dispatch(searchPost(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
