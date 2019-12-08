import React, { createContext, useContext, useState } from 'react';
import Loader from '../components/Loader';
import ErrorModal from '../components/ErrorModal';

const ApplicationContext = createContext({});
const useApplicationContext = () => useContext(ApplicationContext);

const ApplicationProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const value = { setLoading, setError, loading, error };

  return (
    <ApplicationContext.Provider value={value}>
      {loading && <Loader />}
      {error && <ErrorModal setError={setError} />}
      {children}
    </ApplicationContext.Provider>
  );
};

export { ApplicationProvider, ApplicationContext, useApplicationContext };
