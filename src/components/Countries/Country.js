import React, { useState } from 'react';
import { Languages } from '../Languages/Languages';

export const Country = ({ country }) => {
  const [showLanguages, setShowLanguages] = useState(false);
  const { name, languages } = country;

  return (
    <>
      <li onClick={() => setShowLanguages(!showLanguages)}>{name}</li>
      {showLanguages && <Languages languages={languages} />}
    </>
  );
};
