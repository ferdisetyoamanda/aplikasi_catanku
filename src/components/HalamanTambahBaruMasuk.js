import React, { useState, useContext } from "react";
import LocaleContext from '../contexts/LocaleContext';
import PropTypes from 'prop-types'
import { TiTickOutline } from 'react-icons/ti';




const HalamanTambahMasuk = ({ addNote }) => {
  const { locale } = useContext(LocaleContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const onInputHandler = (e) => {
    setBody(e.target.innerHTML);
  };

  const onClickHandler = () => {
    addNote({ title, body });
  };

  return (
    <>
      <div className="add-new-page__input">
        <input
          className="add-new-page__input__title"
          placeholder={locale === 'id' ? 'Judul Catatan...' : 'Title Note...'}
          value={title}
          onChange={onChangeHandler}
        />
        <div
          className="add-new-page__input__body"
          data-placeholder={locale === 'id' ? 'Isi Catatan..' : 'Body Note..'}
          contentEditable="true"
          onInput={onInputHandler}
        ></div>
      </div>
      <div className="add-new-page__action">
        <button
          className="action"
          type="button"
          title="Simpan"
          onClick={onClickHandler}
        >
          <TiTickOutline />
        </button>
      </div>
    </>
  );
};


HalamanTambahMasuk.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default HalamanTambahMasuk;
