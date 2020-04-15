import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from "../redux/posts";

export class PostList extends Component {
    constructor() {
        super();

        this.handlePostClick = this.handlePostClick.bind(this)
    }

    componentDidMount() {
        this.props.getPosts()
    }

    handlePostClick(postId) {
        this.props.history.push(`/posts/${postId}`)
    }

    render() {
        return (
            <div className="posts-grid">
                {
                    this.props.posts.map(post => {
                        return (
                            <div key={post.id} className="card" onClick={() => this.handlePostClick(post.id)}>
                                <img src={post.imageUrl} />
                                <h1>{post.title}</h1>
                                <h5>{post.subtitle}</h5>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPosts: () => dispatch(getPosts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
