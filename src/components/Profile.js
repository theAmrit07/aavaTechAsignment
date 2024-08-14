import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './Profile.css';

const fetchUser = async (id) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  return response.data;
};

const updateUser = async (id, data) => {
  await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, data);
};

const Profile = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { data: user, isLoading, error } = useQuery(['user', id], () => fetchUser(id));
  const { register, handleSubmit, reset } = useForm();

  const mutation = useMutation(
    (data) => updateUser(id, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['user', id]);
        reset();
      }
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="profile-container">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <h3>Update Profile</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="profile-form">
        <input {...register('name', { required: true })} placeholder="Name" defaultValue={user.name} />
        <input {...register('email', { required: true })} placeholder="Email" defaultValue={user.email} />
        <input {...register('phone', { required: true })} placeholder="Phone" defaultValue={user.phone} />
        <input {...register('website', { required: true })} placeholder="Website" defaultValue={user.website} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Profile;
