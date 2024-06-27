import React from 'react';

const BlogPost = ({ post, onClose }) => {
  return (
    <div>
      <button onClick={onClose}>Close</button>
      <h2>{post.title}</h2>
      <p>Author: {post.author}</p>
      <p>{post.content}</p>
      <p>Published on: {post.publicationDate}</p>
    </div>
  );
};

export default BlogPost;