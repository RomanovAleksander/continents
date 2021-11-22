import React, { useState } from 'react';
import { Languages } from '../Languages/Languages';

export const Country = ({ country }) => {
  const { name, languages } = country;
  const [showLanguages, setShowLanguages] = useState(false)

  return (
    <>
      <li onClick={() => setShowLanguages(!showLanguages)}>{name}</li>
      {showLanguages && <Languages languages={languages} />}
    </>
  );
};
