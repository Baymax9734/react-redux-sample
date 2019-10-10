import { FETCH_POSTS, NEW_POST } from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    // .then(res => {
    //   const data = res.data;
    //   this.setState({ posts : data })
    // })

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts
    })
  );
}

export const createPost = (postData) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      }
    ));
}
