import { connect } from "react-redux";

import Header from "../Components/Header";
import { searchPost } from "../Redux/Posts";



const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
  };
};

const mapDispatchToProps = (dispatch) => ({
  searchPost: (value) => dispatch(searchPost(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
