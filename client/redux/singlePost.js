import axios from 'axios'

const GOT_POST = "GOT_POST"

const gotPost = post => {
    return {
        type: GOT_POST,
        post
    }
}

export const getPost = (postId) => {
    return async function(dispatch) {
        try {
            const { data } = await axios.get('/api/posts/:id')

            dispatch(gotPosts(data))
        } catch (error) {
            console.log(error);
        }

    }
}

const postReducer = (state = {}, action) => {
    switch (action.type) {
        case GOT_POST: 
            return action.post
        default:
            return state
    }
}

export default postReducer