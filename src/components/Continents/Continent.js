import React, { useEffect, useState } from 'react';
import { ContinentsContext } from '../../context/ContinentsContext';
import { GET_COUNTRIES } from '../../query/countries';
import { useQuery } from '@apollo/client';
import { Countries } from '../Countries/Countries';

export const Continent = ({ continent }) => {
  const { name, code } = continent;
  const [countries, setCountries] = useState([]);
  const [enabled, setEnabled] = React.useState(false);
  const { data } = useQuery(GET_COUNTRIES, {variables: { code }});

  useEffect(async () => {
    enabled ? setCountries(data.continents[0].countries) : setCountries([]);
  }, [enabled]);

  return (
    <>
      <li onClick={() => setEnabled(!enabled)}>{name}</li>
      {!!countries.length && (
        <ContinentsContext.Provider value={{ setEnabled, setCountries }}>
          <Countries countries={countries} />
        </ContinentsContext.Provider>
      )}
    </>
  );
};
