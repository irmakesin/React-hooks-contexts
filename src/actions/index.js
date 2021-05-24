import { SET_POSTS } from './types';

export function setPosts(data) {
  return {
    type: SET_POSTS,
    payload: data
  };
}