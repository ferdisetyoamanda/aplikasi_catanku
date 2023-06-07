import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';
// import useInput from '../hooks/useInput';

const Pencarian = ({ keyword, keywordChange }) => {
  const { locale } = useContext(LocaleContext);

  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder={
          locale === 'id' ? 'Cari judul!' : 'Search title!'
        }
        value={keyword}
        onChange={(cari) => keywordChange(cari.target.value)}
      />
    </section>
  );
}

Pencarian.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default Pencarian;
