import React, { useEffect, useState } from 'react';
import { GET_CONTINENTS } from '../../query/continents';
import { useQuery } from '@apollo/client';
import { Continents } from '../Continents/Continents';

const App = () => {
  const [continents, setContinents] = useState([]);
  const { data, loading, error } = useQuery(GET_CONTINENTS);

  useEffect(() => {
    if (!loading) {
      setContinents(data.continents);
    }
  }, [data])

  if (loading) {
    return <p className="loading">Loading...</p>
  }

  if (error) {
    return <p className="error">Oops, Something went wrong...</p>
  }

  return (
    <div className="list-container">
      <Continents continents={continents}/>
    </div>
  );
}

export default App;
