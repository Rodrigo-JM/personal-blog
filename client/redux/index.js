import { combineReducers } from 'redux';
import postsReducer from './posts'
import singlePostReducer from './singlePost'

const appReducer = combineReducers({
    posts: postsReducer,
    post: singlePostReducer,
})

export default appReducer