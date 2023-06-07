import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginAkun from '../components/Login';
import LocaleContext from '../contexts/LocaleContext';
import { login } from '../utils/api';

const HalamanLogin = ({ loginSuccess }) => {
    const { locale } = useContext(LocaleContext);
  
    const onLogin = async ({ email, password }) => {
      const { error, data } = await login({ email, password });
  
      if (!error) {
        loginSuccess(data);
      }
    };
  
    return (
      <section className="login-page">
        <h2>
          {locale === 'id'
            ? 'Yuk, login untuk menggunakan aplikasi.'
            : 'Login to use app, please.'}
        </h2>
        <LoginAkun login={onLogin} />
        <p>
          {locale === 'id' ? 'Belum punya akun?' : `Dont'have an account?`}{' '}
          <Link to="/register">
            {locale === 'id' ? 'Daftar di sini.' : 'Register here'}
          </Link>
        </p>
      </section>
    );
  };
  
HalamanLogin.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
};
  
  export default HalamanLogin;