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
   git clone https://github.com/your-username/social-media-app.git
   cd social-media-app
Install Dependencies

bash
Copy code
npm install
# or
yarn install
Start the Development Server

bash
Copy code
npm start
# or
yarn start
The application will be running at http://localhost:3000.

Usage
User Login
Navigate to the login page.
Enter a user ID (e.g., 1) to log in.
Access all pages and functionalities as the logged-in user.
Viewing Posts
After logging in, navigate to the feed page.
Posts specific to the logged-in user will be displayed.
Profile Management
Go to the profile page.
Update your profile information as needed.
Adding and Deleting Comments
On the post detail page, add comments using the provided textarea.
Comments will appear immediately after being added.
To delete a comment, click the "Delete" button next to it.
Viewing Other User Profiles
In the feed or post detail pages, click on the user name to view their profile.
Creating, Updating, and Deleting Posts
Use the feed page to create new posts.
Existing posts can be updated or deleted directly from the feed.
API Integration
Endpoints Used
Posts: https://jsonplaceholder.typicode.com/posts
Comments: https://jsonplaceholder.typicode.com/comments
Users: https://jsonplaceholder.typicode.com/users
API Functions
fetchUserPosts(userId): Fetches posts for a specific user.
fetchPost(postId): Fetches a single post by ID.
fetchComments(postId): Fetches comments for a specific post.
addComment(postId, comment): Adds a new comment to a post.
deleteComment(commentId): Deletes a comment.
Code Structure
src/: Contains all source code files.
components/: React components for different pages and functionalities.
api.js: API functions for fetching and mutating data.
context/: Context providers for managing global state.
App.js: Main application component.
index.js: Entry point of the application.
styles/: CSS files for styling the application.
Error Handling
Network Errors: Display user-friendly messages when network requests fail.
Empty States: Inform users when there are no posts or comments.
