import axios from 'axios'

const GOT_POSTS = "GOT_POSTS"

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
        case GOT_POSTS: 
            return action.posts
        default:
            return state
    }
}

export default postsReducer