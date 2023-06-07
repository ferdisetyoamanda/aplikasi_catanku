import PropTypes from 'prop-types';
import React, {useContext } from "react";
import LocaleContext from '../contexts/LocaleContext';
import useInput from '../hooks/useInput';

const LoginAkun = ({ login }) => {
    const [email, onEmailChangeHandler] = useInput('');
    const [password, onPasswordChangeHandler] = useInput('');
    const { locale } = useContext(LocaleContext);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        login({ email, password});
    };

    return (
        <form onSubmit={onSubmitHandler} className="input-login">
            <label htmlFor="email">Email</label>
            <input
            id="email"
            type="email"
            value={email}
            onChange={onEmailChangeHandler}
            />
    
            <label htmlFor="password">{locale === 'id' ? 'Kata Sandi' : 'Password'}</label>
            <input
            type="password"
            value={password}
            onChange={onPasswordChangeHandler}
            />
            <button>{locale === 'id' ? 'Masuk' : 'Login'}</button>
        </form>
    );
};

LoginAkun.propTypes = {
    login: PropTypes.func.isRequired,
};

export default LoginAkun;