import React from 'react';
import {Country} from './Country';

export const Countries = ({ countries }) => {
  return (
    <ul>
      {countries.map((country) => (
          <Country key={country.code} country={country} />
        ))}
    </ul>
  );
};
