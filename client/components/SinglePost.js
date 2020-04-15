import React, { Component } from "react";
import { connect } from "react-redux";
import { getPost, deletePost } from "../redux/singlePost";
import { Redirect } from "react-router-dom";
export class SinglePost extends Component {
  constructor() {
    super();
    this.editPost = this.editPost.bind(this);
    this.deletePost = this.deletePost.bind(this)
  }

  componentDidMount() {
    this.props.getPost(this.props.match.params.postId);
  }

  editPost(post) {
    this.props.history.push(`/blog/posts/${post.id}/edit`);
  }

  deletePost() {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/blog')
  }
  
  render() {
    return (
      <div className="post">
        <button onClick={() => this.editPost(this.props.post)}>Edit</button>
        <div className="post-content">
          <h1>{this.props.post.title}</h1>
          <p>{this.props.post.content}</p>
        </div>
        <button onClick={() => this.deletePost()}>
          Delete
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.post,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (postId) => dispatch(getPost(postId)),
    deletePost: (postId) => dispatch(deletePost(postId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
