import React, { useContext } from 'react';
import { MdTranslate } from 'react-icons/md';
import LocaleContext from '../contexts/LocaleContext';

const TblLocale = () => {
  const { toggleLocale } = useContext(LocaleContext);

  return (
    <button className="toggle-locale" type="button" onClick={toggleLocale}>
      <MdTranslate />
    </button>
  );
};

export default TblLocale;