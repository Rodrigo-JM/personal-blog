import { combineReducers } from 'redux';
import postsReducer from './posts'
import singlePostReducer from './singlePost'

const appReducer = combineReducers({
    posts: postReducer,
    singlePost: singlePostReducer,
})

export default appReducer