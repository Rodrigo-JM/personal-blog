import { combineReducers } from 'redux';
import postsReducer from './posts'
import singlePostReducer from './singlePost'

const appReducer = combineReducers({
    posts: postsReducer,
    singlePost: singlePostReducer,
})

export default appReducer