import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import LocaleContext from "../contexts/LocaleContext";



const Navigation = () => {
  const { locale } = useContext(LocaleContext);
  return (
  <nav className="navigation">
    <ul>
      <li>
        <Link to="/" title={locale === 'id' ? 'Beranda' : 'Page Home'}>{locale === 'id' ? 'Beranda' : 'Home Page'}</Link>
      </li>
      <li>
        <Link to="/archives" title={locale === 'id' ? 'Terarsip' : 'Archived'}>{locale === 'id' ? 'Terarsip' : 'Archived'}</Link>
      </li>
    </ul>
  </nav>
  );
}
  
export default Navigation;