import React from 'react';
import { BsPlusCircleDotted } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const HalamanAwal = () => {
    return (
        <div className="homepage__action">
          <Link to="/notes/new">
            <button className="action" type="button" title="Tambah Catatan">
              <BsPlusCircleDotted />
            </button>
          </Link>
        </div>
    );
};

export default HalamanAwal;