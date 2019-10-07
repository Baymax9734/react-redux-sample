import React from 'react';
import Posts from './components/Posts';
import PostForm from './components/Postform';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <PostForm />
      <Posts />
    </div>
  )
}
