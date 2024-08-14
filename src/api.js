import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const deleteComment = async (commentId) => {
    await axios.delete(`${API_URL}/comments/${commentId}`);
  };
  
// Fetch posts for a specific user
export const fetchUserPosts = async (userId) => {
    const response = await axios.get(`${API_URL}/posts?userId=${userId}`);
    return response.data;
  };
  

export const fetchPosts = async () => {
  const response = await axios.get(`${API_URL}/posts`);
  return response.data;
};

export const fetchPost = async (id) => {
  const response = await axios.get(`${API_URL}/posts/${id}`);
  return response.data;
};

export const fetchComments = async (postId) => {
  const response = await axios.get(`${API_URL}/posts/${postId}/comments`);
  return response.data;
};

export const fetchUser = async (userId) => {
  const response = await axios.get(`${API_URL}/users/${userId}`);
  return response.data;
};

export const createPost = async (post) => {
  const response = await axios.post(`${API_URL}/posts`, post);
  return response.data;
};

export const updateUser = async (userId, user) => {
  const response = await axios.put(`${API_URL}/users/${userId}`, user);
  return response.data;
};

export const addComment = async (postId, comment) => {
  const response = await axios.post(`${API_URL}/posts/${postId}/comments`, comment);
  return response.data;
};
