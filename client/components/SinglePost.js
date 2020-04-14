import React, { Component } from "react";
import { connect } from "react-redux";
import { getPost } from "../redux/singlePost";
export class SinglePost extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.postId);
  }

  render() {
    return (
      <div className="post">
          <div className="post-content">
            <h1>{this.props.post.title}</h1>
            <p>{this.props.post.content}</p>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.singlePost,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (postId) => dispatch(getPost(postId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
