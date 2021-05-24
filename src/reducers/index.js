import postsReducer, { postsInitialState } from "./posts";


export const initialState = {
postsState:postsInitialState,
bbb:[]
  };
  
  const mainReducer = ({ posts }, action) => ({     postsState: postsReducer(posts, action) })  
  export default mainReducer

