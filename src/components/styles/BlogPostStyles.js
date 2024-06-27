import styled from 'styled-components';

export const BlogPostContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const BlogPostTitle = styled.h2`
  color: #333;
`;

export const BlogPostAuthor = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

export const BlogPostSummary = styled.p`
  color: #555;
`;

export const BlogPostDate = styled.p`
  color: #888;
  font-size: 0.8rem;
`;

export const BlogPostButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;