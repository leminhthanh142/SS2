import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const PracticeContext = React.createContext(false);

export const usePractice = () => {
  return useContext(PracticeContext);
};

export const PracticeContextProvider = ({ children }) => {
  const [isFromForkSolution, setIsFromForkSolution] = useState(false);

  const values = {
    isFromForkSolution,
    setIsFromForkSolution
  };
  return <PracticeContext.Provider value={values}>{children}</PracticeContext.Provider>;
};

PracticeContextProvider.propTypes = {
  children: PropTypes.node
};
