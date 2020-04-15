import axios from 'axios'

const GOT_POSTS = "GOT_POSTS"
const DELETED_POST = "DELETED_POST"
const gotPosts = posts => {
    return {
        type: GOT_POSTS,
        posts
    }
}

export const getPosts = () => {
    return async function(dispatch) {
        try {
            const { data } = await axios.get('/api/posts')
            console.log('gettng')
            dispatch(gotPosts(data))
        } catch (error) {
            console.log(error);
        }

    }
}

const postsReducer = (state = [], action) => {
    switch (action.type) {
        case DELETED_POST:
            return state.filter(post => post.id !== action.postId)
        case GOT_POSTS: 
            return action.posts
        default:
            return state
    }
}

export default postsReducer