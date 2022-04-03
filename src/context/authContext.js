import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = React.createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const values = {
    user,
    setUser
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
  children: PropTypes.node
};
