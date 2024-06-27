import React from 'react';
import {
  BlogPostContainer,
  BlogPostTitle,
  BlogPostAuthor,
  BlogPostSummary,
  BlogPostDate,
  BlogPostButton
} from './styles/BlogPostStyles';

const BlogPostList = ({ posts, onView, onEdit, onDelete }) => {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <BlogPostContainer>
            <BlogPostTitle>{post.title}</BlogPostTitle>
            <BlogPostAuthor>Author: {post.author}</BlogPostAuthor>
            <BlogPostSummary>{post.summary}</BlogPostSummary>
            <BlogPostDate>Published on: {post.publicationDate}</BlogPostDate>
            <BlogPostButton onClick={() => onView(post)}>View</BlogPostButton>
            <BlogPostButton onClick={() => onEdit(post)}>Edit</BlogPostButton>
            <BlogPostButton onClick={() => onDelete(post.id)}>Delete</BlogPostButton>
          </BlogPostContainer>
        </li>
      ))}
    </ul>
  );
};

export default BlogPostList;


