// `src/components/CreatePost.js`
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost } from '../api';

const CreatePost = () => {
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => queryClient.invalidateQueries(['posts'])
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('title', { required: true })} placeholder="Title" />
      <textarea {...register('body', { required: true })} placeholder="Body" />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
