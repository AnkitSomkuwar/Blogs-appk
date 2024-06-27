

import React, { useState, useEffect } from 'react';
import BlogPostList from './components/BlogPostList';
import AddEditPostForm from './components/AddEditPostForm';
import BlogPost from './components/BlogPost';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchPosts(); // Fetch posts from local storage or mock API on initial load
  }, []);

  const fetchPosts = () => {
    // Fetch posts from local storage or mock API
    const postsFromStorage = JSON.parse(localStorage.getItem('blogPosts')) || [];
    setPosts(postsFromStorage);
  };

  const addPost = (post) => {
    const newPosts = [...posts, post];
    setPosts(newPosts);
    localStorage.setItem('blogPosts', JSON.stringify(newPosts));
    setIsAdding(false);
  };

  const updatePost = (updatedPost) => {
    const updatedPosts = posts.map(post =>
      post.id === updatedPost.id ? updatedPost : post
    );
    setPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    setIsEditing(false);
  };

  const deletePost = (postId) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    setSelectedPost(null); // Deselect post if currently viewing deleted post
  };

  const handleAddClick = () => {
    setIsAdding(true);
    setIsEditing(false);
    setSelectedPost(null);
  };

  const handleEditClick = (post) => {
    setSelectedPost(post);
    setIsAdding(false);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsAdding(false);
    setIsEditing(false);
    setSelectedPost(null);
  };

  const viewPost = (post) => {
    setSelectedPost(post);
  };

  return (
    <div className="App">
      <header>
        <h1>My Blog</h1>
      </header>
      <main>
        {!selectedPost && (
          <React.Fragment>
            <button onClick={handleAddClick}>Add New Post</button>
            <BlogPostList posts={posts} onView={viewPost} onEdit={handleEditClick} onDelete={deletePost} />
          </React.Fragment>
        )}
        {selectedPost && (
          <BlogPost post={selectedPost} onClose={() => setSelectedPost(null)} />
        )}
        {isAdding && (
          <AddEditPostForm onSave={addPost} onCancel={handleCancel} />
        )}
        {isEditing && (
          <AddEditPostForm post={selectedPost} onSave={updatePost} onCancel={handleCancel} />
        )}
      </main>
    </div>
  );
};

export default App;