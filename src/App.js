import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './components/Login';
import Feed from './components/Feed';
import Profile from './components/Profile';
import Post from './components/Post';

const queryClient = new QueryClient();

 

function App() {
  const [userId, setUserId] = useState(null);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={userId ? <Navigate to="/feed" /> : <Login setUserId={setUserId} />} />
          <Route path="/feed" element={userId ? <Feed /> : <Navigate to="/" />} />
          <Route path="/profile/:id" element={userId ? <Profile /> : <Navigate to="/" />} />
          <Route path="/post/:id" element={userId ? <Post /> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
