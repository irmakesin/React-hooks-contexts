import React from 'react';
import Button from '@material-ui/core/Button';

import PostListFrom from './PostFrom';
import { useStateFromContext } from '../context/index'
import { getPosts, setPosts } from '../actions/index'
import axios from 'axios';

const POSTS_SERVICE_URL = 'https://jsonplaceholder.typicode.com/posts';

function WithContext() {
  const [ {postsState,bbb}, dispatch] = useStateFromContext()
  console.log(postsState)
const handleClick = () => {
  axios
        .get(POSTS_SERVICE_URL)
        .then((response) => {
          dispatch({
            type:"SET_POSTS",
            payload:response.data
          })
           
        })
        .catch((err) => {
          console.log(err.message);
        });
}
  return ( 
    <div>
      <Button variant= "contained" onClick={handleClick} >Fetch posts</Button>
      <PostListFrom  />
      {postsState?.posts.map(post => {

  
        <div> {post.title} </div>
      })
      }
    </div>
  );
}


export default WithContext;