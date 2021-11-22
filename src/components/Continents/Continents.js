import React from 'react';
import { Continent } from './Continent';

export const Continents = ({ continents }) => {
  return (
    <ul>
      {continents.map((continent) => (
          <Continent continent={continent} key={continent.code} />
        ))}
    </ul>
  );
};
