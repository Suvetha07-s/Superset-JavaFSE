// src/Posts.js
import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // Load static, meaningful blog posts
  loadPosts = () => {
    const customPosts = [
      {
        id: 1,
        title: "How to Stay Motivated as a Developer",
        body: "Being consistent with your goals can lead to great success. Never stop learning, and always stay curious."
      },
      {
        id: 2,
        title: "Understanding React Lifecycle Methods",
        body: "React provides various lifecycle methods to help manage state and side effects. componentDidMount is great for fetching data after the first render."
      },
      {
        id: 3,
        title: "10 JavaScript Tricks You Didn't Know",
        body: "From destructuring to optional chaining, these tips can make your code cleaner and more efficient."
      },
      {
        id: 4,
        title: "The Power of Async/Await in JavaScript",
        body: "Asynchronous programming in JS has never been easier. Learn how async/await improves readability and flow."
      },
      {
        id: 5,
        title: "Debugging in Chrome DevTools",
        body: "Mastering the browser's developer tools can help you catch and fix bugs faster than ever."
      }
    ];

    this.setState({ posts: customPosts });
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert('Something went wrong: ' + error.message);
    console.error("Error caught in componentDidCatch:", error, info);
  }

  render() {
    const { posts, hasError } = this.state;

    if (hasError) {
      return <h1>Error loading posts.</h1>;
    }

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>📰 Developer Blog</h1>
        {posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
