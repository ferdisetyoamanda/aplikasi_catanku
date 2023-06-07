import React from "react";
import PropTypes from 'prop-types';
import { ImExit } from 'react-icons/im';

const TblKeluar = ({ logout, name }) => {
    return (
        <button onClick={logout} className="button-logout" type="button">
            <ImExit/> {name}

        </button>
    );
};

TblKeluar.propTypes = {
    logout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};

export default TblKeluar;

