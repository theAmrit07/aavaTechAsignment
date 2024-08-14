import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../api';
import { Link } from 'react-router-dom';
import './Feed.css';

// const Feed = () => {
//   const { data: posts, isLoading, error } = useQuery(['posts'], fetchPosts);

const Feed = () => {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts
  });

  if (isLoading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error">Error: {error.message}</div>;

 

//   if (isLoading) {
//     console.log('Loading posts...');
//     return <div className="loader">Loading...</div>;
//   }
//   if (error) {
//     console.error('Error fetching posts:', error);
//     return <div className="error">Error: {error.message}</div>;
//   }
//  console.log('Posts data:', posts);

  return (
    <div className="feed-container">
      <h2>Feed</h2>
      <ul className="feed-list">
        {posts.map(post => (
          <li key={post.id} className="feed-item">
            <Link to={`/post/${post.id}`} className="feed-link">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
  // return (
  //   <div>
  //     <h2>Feed</h2>
  //     <ul>
  //       {posts.map(post => (
  //         <li key={post.id}>
  //           <Link to={`/post/${post.id}`}>{post.title}</Link>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
};

export default Feed;
