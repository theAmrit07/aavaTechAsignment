# Social Media Web Application

## Overview

This is a social media web application built with React. It utilizes the JSONPlaceholder API for dummy data and includes features such as user login, profile management, posts, comments, and viewing other user profiles.

## Features

- **User Login**: Mock login feature using user ID.
- **Feed Page**: Displays posts from the logged-in user.
- **Profile Page**: Allows users to view and update their profile information.
- **Comments**: Users can view, add, and delete comments on posts.
- **User Profiles**: Users can view other user profiles by clicking on their names.
- **Post Management**: Users can create, update, and delete their posts.

## Tech Stack

- **Frontend**: React
- **API**: JSONPlaceholder API
- **State Management**: React Query for data fetching and caching
- **Form Handling**: React Hook Form

## Installation

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Steps to Set Up the Project

1. **Clone the Repository**

   ```bash
   git clone https://github.com/theAmrit07/aavaTechAsignment.git


   ```

2. **Install Dependencies**

   ```bash
   npm install

   ```

3. **Start the Dev Server**
   ```bash
   npm start
   ```

# API Integration

## End Points Used

Posts:

    https://jsonplaceholder.typicode.com/posts

Comments:

    https://jsonplaceholder.typicode.com/comments

Users:

    https://jsonplaceholder.typicode.com/users

## API Functions

- `fetchUserPosts(userId)`: Fetches posts for a specific user.

- `fetchPost(postId)`: Fetches a single post by ID.

- `fetchComments(postId)`: Fetches comments for a specific post.

- `addComment(postId, comment)`: Adds a new comment to a post.

- `deleteComment(commentId)`: Deletes a comment.

# Detailed Steps for API Integration

## Step 1: Install Required Packages

- Make sure to install react-query and react-hook-form:
  ```bash
   npm install @tanstack/react-query react-hook-form
  ```

## Step 2: Set Up API Functions

- Create an api.js file in the src/ directory to handle API calls:

```bash
// src/api.js
import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUserPosts = async (userId) => {
const response = await axios.get(`${BASE_URL}/posts?userId=${userId}`);
return response.data;
};

export const fetchPost = async (postId) => {
const response = await axios.get(`${BASE_URL}/posts/${postId}`);
return response.data;
};

export const fetchComments = async (postId) => {
const response = await axios.get(`${BASE_URL}/comments?postId=${postId}`);
return response.data;
};

export const addComment = async (postId, comment) => {
const response = await axios.post(`${BASE_URL}/comments`, { postId, ...comment });
return response.data;
};

export const deleteComment = async (commentId) => {
await axios.delete(`${BASE_URL}/comments/${commentId}`);
};
```

## Step 3: Implement React Query Hooks

- Use React Query hooks in your components:

```bash
// src/components/Feed.js
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchUserPosts } from '../api';

const Feed = ({ userId }) => {
const { data: posts, isLoading, error } = useQuery(['userPosts', userId], () => fetchUserPosts(userId));

if (isLoading) return <div>Loading...</div>;
if (error) return <div>Error loading posts</div>;

return (
  <div>
    {posts.map(post => (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    ))}
  </div>
);
};

export default Feed;
```



```bash
// src/components/Post.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { addComment, fetchComments, deleteComment } from '../api';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const Post = ({ postId }) => {
const queryClient = useQueryClient();
const { data: comments, isLoading, error } = useQuery(['comments', postId], () => fetchComments(postId));
const { register, handleSubmit, reset } = useForm();
const mutation = useMutation(comment => addComment(postId, comment), {
  onSuccess: () => {
    queryClient.invalidateQueries(['comments', postId]);
    reset();
  }
});

const handleDelete = async (commentId) => {
  await deleteComment(commentId);
  queryClient.invalidateQueries(['comments', postId]);
};

if (isLoading) return <div>Loading...</div>;
if (error) return <div>Error loading comments</div>;

return (
  <div>
    <form onSubmit={handleSubmit(mutation.mutate)}>
      <textarea {...register('body', { required: true })}></textarea>
      <button type="submit">Add Comment</button>
    </form>
    {comments.map(comment => (
      <div key={comment.id}>
        <p>{comment.body}</p>
        <button onClick={() => handleDelete(comment.id)}>Delete</button>
      </div>
    ))}
  </div>
);
};

export default Post;
```

## Step 4: Handling State and Navigation
- Ensure that your application properly manages user state and navigation between pages. For example, manage user login state in a context provider and ensure pages are accessible only if the user is logged in.

# Code Structure
- `src`/: Contains all source code files.

  - `components`/: React components for different pages and functionalities.
   - `Feed.js`: Displays posts from the logged-in user.
   -   `Profile.js`: Displays and updates user profile information.
   -   `Post.js`: Displays a single post with comments. 

  - `api.js`: Contains API functions for fetching and mutating data.
  - `context/`: Context providers for managing global state.
  - `App.js`: Main application component.
  - `index.js`: Entry point of the application.
  - `styles/`: CSS files for styling the application.

# Error Handling

- `Network Errors`: Display user-friendly messages when network requests fail.

- `Empty States`: Inform users when there are no posts or comments.


# 

` This README.md file includes detailed setup instructions, API integration `


