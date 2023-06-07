import React from 'react';
import PropTypes from 'prop-types';
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import Swal from 'sweetalert2';

const HalamanDetailCatatanku = ({
  id,
  title,
  archived,
  archiveNote,
  deleteNote,
  unArchiveNote,

}) => {
  const onArchiveHandler = () => {
    archiveNote(id);
  };

  const onUnarchiveHandler = () => {
    unArchiveNote(id);
  };

  const onDeleteHandler = () => {
    // sweet alert
    Swal.fire({
      icon: 'warning',
      title: `Hapus Catatann "${title}"`,
      text: 'Apakah anda ingin menghapus Catatan ini?',
      showCancelButton: true,
      confirmButtonColor: '#a10b0b',
      cancelButtonColor: '#549b0e',
      confirmButtonText: 'Hapus',
    }).then((result) => {
      if (result.isConfirmed) {
        
        deleteNote(id);

        Swal.fire({
          title: `Catatan "${title}" berhasil terhapus`,
          position: 'center',
          icon: 'success',
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };

  return (
    <div className="detail-page__action">
      {archived ? (
        <button
          className="action"
          type="button"
          title="Aktifkan"
          onClick={onUnarchiveHandler}
        >
          <BiArchiveOut />
        </button>
      ) : (
        <button
          className="action"
          type="button"
          title="Arsipkan"
          onClick={onArchiveHandler}
        >
          <BiArchiveIn />
        </button>
      )}

      <button
        className="action"
        type="button"
        title="Hapus"
        onClick={onDeleteHandler}
      >
        <MdOutlineDeleteOutline />
      </button>
    </div>
  );

};

HalamanDetailCatatanku.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  archived: PropTypes.bool,
  archiveNote: PropTypes.func,
  unArchiveNote: PropTypes.func,
  deleteNote: PropTypes.func,
};

export default HalamanDetailCatatanku;
