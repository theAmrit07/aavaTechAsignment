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
    

2. **Install Dependencies**

   ```bash
   npm install
 

3. **Start the Dev Server**
   ```bash
   npm start
# or
   yarn start

## API Integration
   # End Points Used
   Posts:
    
    https://jsonplaceholder.typicode.com/posts
   Comments:
    
    https://jsonplaceholder.typicode.com/comments
   Users:
   
    https://jsonplaceholder.typicode.com/users

   # API Functions
fetchUserPosts(userId): Fetches posts for a specific user.
fetchPost(postId): Fetches a single post by ID.
fetchComments(postId): Fetches comments for a specific post.
addComment(postId, comment): Adds a new comment to a post.
deleteComment(commentId): Deletes a comment. 
