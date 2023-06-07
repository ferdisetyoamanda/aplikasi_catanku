import React, { useContext, useEffect, useState } from "react";
import HalamanAwal from "../components/HalamanAwal";
import CatatankuList from "../components/CatatankuList";
import { getArchivedNotes  } from "../utils/api";
import { useSearchParams } from "react-router-dom";
import CatatankuKosong from "../components/CatatankuKosong";
import Pencarian from "../components/Pencarian";
import IndikasiLoading from "../components/IndikasiLoading";
import LocaleContext from '../contexts/LocaleContext';

const HomePage = () => {
  const { locale } = useContext(LocaleContext);
  const [seacrhParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
 

  const [keyword, setKeyword] = useState(() => {
    return seacrhParams.get('keyword') || ('');
  });

  function changeSearchParams(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  useEffect(() => {
    const fetchGetNotes = async () => {
      try {
        const { data } = await getArchivedNotes();
        setNotes(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchGetNotes();
  }, []);

  const hasil = notes.filter((note) => {
    return note.title
    .toLowerCase()
    .includes(keyword.toLowerCase());
  });
  return (
      <section className="homepage">
        <h4>{locale === 'id' ? 'Catatan Aktif' : 'Active Note'}</h4>
        
        <Pencarian defaultKeyword={keyword} keywordChange={changeSearchParams} />
        <h2>{locale === 'id' ? 'Daftar Catatan' : 'Notes List'}</h2>
        {loading && <IndikasiLoading />}
        {hasil.length !== 0 ? (
          <CatatankuList notes={hasil} />
        ) : (
          <CatatankuKosong />
        )}
        <HalamanAwal />
      </section>
  );

}


export default HomePage;