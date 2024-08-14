// import axios from 'axios';
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import { fetchPost, fetchComments } from '../api';
// import { useForm } from 'react-hook-form';
// import './Post.css';

// const Post = () => {
//   const { id } = useParams();
//   const queryClient = useQueryClient();
//   const { data: post, isLoading: postLoading, error: postError } = useQuery(['post', id], () => fetchPost(id));
//   const { data: comments, isLoading: commentsLoading, error: commentsError } = useQuery(['comments', id], () => fetchComments(id));
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [newComment, setNewComment] = useState('');

//   const mutation = useMutation(
//     async () => {
//       await axios.post('https://jsonplaceholder.typicode.com/comments', {
//         postId: id,
//         body: newComment
//       });
//       queryClient.invalidateQueries(['comments', id]);
//     },
//     {
//       onSuccess: () => {
//         setNewComment('');
//       }
//     }
//   );

//   if (postLoading || commentsLoading) return <div className="loader">Loading...</div>;
//   if (postError || commentsError) return <div className="error">Error: {postError?.message || commentsError?.message}</div>;

//   return (
//     <div className="post-container">
//       <h2>{post.title}</h2>
//       <p>{post.body}</p>
//       <h3>Comments</h3>
//       <ul className="comment-list">
//         {comments.map(comment => (
//           <li key={comment.id} className="comment-item">
//             {comment.body}
//           </li>
//         ))}
//       </ul>
//       <form onSubmit={handleSubmit(() => mutation.mutate())} className="comment-form">
//         <textarea
//           {...register('comment', { required: true })}
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//           placeholder="Add a comment"
//           className="comment-input"
//         />
//         {errors.comment && <span className="error">Comment is required</span>}
//         <button type="submit" className="comment-button">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Post;
 

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchPost, fetchComments } from '../api';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './Post.css';

const Post = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { data: post, isLoading: postLoading, error: postError } = useQuery({
    queryKey: ['post', id],
    queryFn: () => fetchPost(id)
  });
  const { data: comments, isLoading: commentsLoading, error: commentsError } = useQuery({
    queryKey: ['comments', id],
    queryFn: () => fetchComments(id)
  });
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [newComment, setNewComment] = useState('');

  const mutation = useMutation({
    mutationFn: async () => {
      await axios.post('https://jsonplaceholder.typicode.com/comments', {
        postId: id,
        body: newComment
      });
      queryClient.invalidateQueries(['comments', id]);
    },
    onSuccess: () => {
      setNewComment('');
    }
  });

  if (postLoading || commentsLoading) return <div className="loader">Loading...</div>;
  if (postError || commentsError) return <div className="error">Error: {postError?.message || commentsError?.message}</div>;

  

  return (
    <div className="post-container">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <h3>Comments</h3>
      <ul className="comment-list">
        {comments.map(comment => (
          <li key={comment.id} className="comment-item">
            {comment.body}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit(() => mutation.mutate())} className="comment-form">
        <textarea
          {...register('comment', { required: true })}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="comment-input"
        />
        {errors.comment && <span className="error">Comment is required</span>}
        <button type="submit" className="comment-button">Submit</button>
      </form>
    </div>
  );
};

export default Post;
