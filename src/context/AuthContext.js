import React, { createContext, useContext, useState } from 'react';

// Create context
const AuthContext = createContext();

// Provide context
export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  // Example function to set user ID (you may have a more complex logic)
  const login = (id) => setUserId(id);

  return (
    <AuthContext.Provider value={{ userId, login }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using auth context
export const useAuth = () => useContext(AuthContext);
