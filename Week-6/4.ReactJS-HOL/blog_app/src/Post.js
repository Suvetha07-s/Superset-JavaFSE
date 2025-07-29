// src/Post.js
import React from 'react';

const Post = ({ title, body }) => (
  <div style={{ marginBottom: '20px', padding: '10px', borderBottom: '1px solid #ccc' }}>
    <h2 style={{ color: '#2c3e50' }}>{title}</h2>
    <p style={{ color: '#34495e' }}>{body}</p>
  </div>
);

export default Post;
