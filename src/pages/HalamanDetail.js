import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { archiveNote, deleteNote, getNote, unarchiveNote, } from '../utils/api';
import { showFormattedDate } from '../utils';
import HalamanDetailCatatanku from '../components/HalamanDetailCatatanku';
import HalamanTidakAda from './HalamanTidakAda';

function DetailHalaman() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [notes, setNotes] = useState([]);
  
    const onUnarchiveHandler = async (id) => {
      await unarchiveNote(id);
      navigate('/');
    };
  
    const onDeleteHandler = async (id) => {
      await deleteNote(id);
      navigate('/');
    };
    const onArchiveHandler = async (id) => {
      await archiveNote(id);
      navigate('/');
    };

    useEffect(() => {
      const fetchGetNotes = async () => {
        const { data } = await getNote(id);
  
        setNotes(data);
      };
  
      fetchGetNotes();
    }, [id]);
  
    return notes === undefined ? (
      <HalamanTidakAda />
      ) : (
      <section className="detail-page">
        <h3 className="detail-page__title">{notes.title}</h3>
        <p className="detail-page__createdAt">
          {showFormattedDate(notes.createdAt)}
        </p>
        <div className="detail-page__body">{notes.body}</div>
        <HalamanDetailCatatanku
          id={notes.id}
          title={notes.title}
          deleteNote={onDeleteHandler}
          archived={notes.archived}
          archiveNote={onArchiveHandler}
          unArchiveNote={onUnarchiveHandler}
          
        />
      </section>
    );
}



export default DetailHalaman;