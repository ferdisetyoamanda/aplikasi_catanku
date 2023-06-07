import React from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/api";
import HalamanTambahMasuk from "../components/HalamanTambahBaruMasuk";

const HalamanTambahBaru = () => {
    const navigate = useNavigate();
    const onAddNoteHandler = async (note) => {
        await addNote(note);
        navigate('/');
    };
    return (
    <div className="add-new-page">
      <HalamanTambahMasuk addNote={onAddNoteHandler} />
    </div>
    );
}

export default HalamanTambahBaru;