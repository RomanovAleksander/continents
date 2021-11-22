import React, { useContext } from 'react';
import { ContinentsContext } from '../../context/ContinentsContext';

export const Languages = ({ languages }) => {
  const { setEnabled } = useContext(ContinentsContext);

  return (
    <ul>
      {languages.map((language) => (
          <li key={language.code} onClick={() => setEnabled(false)}>
            {language.name}
          </li>
        ))}
    </ul>
  );
};
