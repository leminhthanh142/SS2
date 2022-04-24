import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = React.createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) return;
    setUser(JSON.parse(user));
  }, []);

  const values = {
    user,
    setUser
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
  children: PropTypes.node
};
