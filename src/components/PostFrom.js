import React from 'react';

import { useStateFromContext } from '../context/index'

function PostListFrom() {
  const [ { postsState }] = useStateFromContext()

  return <div></div>
}

export default PostListFrom;