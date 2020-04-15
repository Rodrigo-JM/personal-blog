import axios from 'axios'

const GOT_POST = "GOT_POST"
const CREATED_NEW_POST = 'CREATED_NEW_POST'

const postTemplate = {title: '', subject: '', content: '', imageUrl: ''}

const gotPost = post => {
    return {
        type: GOT_POST,
        post
    }
}

const createdNewPost = post => {
    return {
        type: CREATED_NEW_POST,
        post
    }
}

export const newPost = (post) => {
    return async function(dispatch) {
        try {
            const { data } = await axios.post(`/api/posts`, post)

            dispatch(createdNewPost(data))
        } catch (error) {
            console.log(error);
        }

    } 
}

export const getPost = (postId) => {
    return async function(dispatch) {
        try {
            const { data } = await axios.get(`/api/posts/${postId}`)

            dispatch(gotPost(data))
        } catch (error) {
            console.log(error);
        }

    }
}

const postReducer = (state = postTemplate, action) => {
    switch (action.type) {
        case CREATED_NEW_POST: 
            return postTemplate
        case GOT_POST: 
            return action.post
        default:
            return state
    }
}

export default postReducer