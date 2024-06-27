import React, { useState } from 'react';
import {
  FormContainer,
  FormLabel,
  FormInput,
  FormTextarea,
  FormButton
} from './styles/FormStyles';

const AddEditPostForm = ({ post, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: post ? post.title : '',
    author: post ? post.author : '',
    content: post ? post.content : '',
    publicationDate: post ? post.publicationDate : '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = {
      ...formData,
      id: post ? post.id : Date.now(), 
    };
    onSave(updatedPost);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormLabel>
        Title:
        <FormInput type="text" name="title" value={formData.title} onChange={handleChange} required />
      </FormLabel>
      <FormLabel>
        Author:
        <FormInput type="text" name="author" value={formData.author} onChange={handleChange} required />
      </FormLabel>
      <FormLabel>
        Content:
        <FormTextarea name="content" value={formData.content} onChange={handleChange} required />
      </FormLabel>
      <FormLabel>
        Publication Date:
        <FormInput type="date" name="publicationDate" value={formData.publicationDate} onChange={handleChange} required />
      </FormLabel>
      <FormButton type="submit">{post ? 'Update' : 'Add'} Post</FormButton>
      <FormButton type="button" onClick={onCancel}>Cancel</FormButton>
    </FormContainer>
  );
};

export default AddEditPostForm;