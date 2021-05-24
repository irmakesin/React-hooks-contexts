import { SET_POSTS } from '../actions/types';

export const postsReducer = (state = postsInitialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return { 
        ...state,
        posts: action.payload 
      };
    default:
      return state;
  }
}

export const postsInitialState = {
  posts: []
}

export default postsReducer