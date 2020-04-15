import axios from 'axios'

const GOT_POST = "GOT_POST"
const CREATED_NEW_POST = 'CREATED_NEW_POST'
const DELETED_POST = "DELETED_POST"
const postTemplate = {title: '', subject: '', content: '', imageUrl: ''}

const gotPost = post => {
    return {
        type: GOT_POST,
        post
    }
}
const deletedPost = (postId) => {
    return {
        type: DELETED_POST,
        postId
    }
}


const createdNewPost = post => {
    return {
        type: CREATED_NEW_POST,
        post
    }
}

export const deletePost = (postId) => {
    return async function(dispatch) {
        try {
            const {data} = await axios.delete(`/api/posts/${postId}`)

            dispatch(deletedPost(postId))
        } catch (error) {
            console.log(error)
        }
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

export const editPost = (post) => {
    return async function(dispatch) {
        try {
            const { data } = await axios.put(`/api/posts/${post.id}`, post)

            dispatch(gotPost(post))
        } catch (error) {
            console.log(error)
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
        case DELETED_POST:
            return postTemplate
        case CREATED_NEW_POST: 
            return action.post
        case GOT_POST: 
            return action.post
        default:
            return state
    }
}

export default postReducer