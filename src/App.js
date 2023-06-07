import React, { useEffect, useState, useMemo } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import HalamanTambahBaru from './pages/HalamanTambah';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import DetailHalaman from './pages/HalamanDetail';
import ArsipCatatan from './pages/Arsip';
import {putAccessToken, getUserLogged } from './utils/api';
import TblKeluar from './components/TblKeluar';
import TblLocale from './components/TblLocale';
import TblTema from './components/TblTema';
import HalamanLogin from './pages/HalamanLogin';
import RegisterPage from './pages/HalamanBuatAkun';
import LocaleContext from './contexts/LocaleContext';
import ThemeContext from './contexts/TemaContext';
import HalamanTidakAda from './pages/HalamanTidakAda';



function App() {
  const login = '/*';
  const register = '/register';
  const home = '/';
  const add = '/notes/new';
  const detail = '/notes/:id';
  const archives = '/archives';
  const notFound = '*';


  const [authedUser, setAuthedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };
  const themeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'id');

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === 'id' ? 'en' : 'id';
      localStorage.setItem('locale', newLocale);
      return newLocale;
    });
  };
  const localeContextValue = useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  useEffect(() => {
    const fetchGetUserLogged = async () => {
      const { data } = await getUserLogged();

      setAuthedUser(data);
      setLoading(false);
    };

    fetchGetUserLogged();
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  const onLoginSucces = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
    
  };
  const onLogout = () => {
    setAuthedUser(null);

    putAccessToken('');
  };

  if (loading) {
    return null;
  }

  if (authedUser === null) {
    return (
      <ThemeContext.Provider value={themeContextValue}>
        <LocaleContext.Provider value={localeContextValue}>
        <div className="app-container">
        <header>
              <h1>
                <Link to="/">
                  {locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}
                </Link>
              </h1>
              <TblLocale />
              <TblTema />
              
        </header>
        <main>
              <Routes>
                <Route
                  path={login}
                  element={<HalamanLogin loginSuccess={onLoginSucces} />}
                />
                <Route path={register} element={<RegisterPage />} />
              </Routes>
        </main>
        </div>
        </LocaleContext.Provider>

      </ThemeContext.Provider>
      
    );

  }
  return (
    <ThemeContext.Provider value={themeContextValue}>
      <LocaleContext.Provider value={localeContextValue}>
      <div className="app-container">
          <header>
            <h1>
              <Link to="/">
                {locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}
              </Link>
            </h1>
            <Navigation />
            <TblLocale />
            <TblTema />
            <TblKeluar logout={onLogout} name={authedUser.name} />
          </header>
          <main>
            <Routes>
              <Route path={home} element={<HomePage />} />
              <Route path={archives} element={<ArsipCatatan />} />
              <Route path={add} element={<HalamanTambahBaru />} />
              <Route path={detail} element={<DetailHalaman />} />
              <Route path={notFound} element={<HalamanTidakAda />} />
            </Routes>
          </main>
        </div>
    </LocaleContext.Provider>

    </ThemeContext.Provider>
    
  );
}

export default App;
