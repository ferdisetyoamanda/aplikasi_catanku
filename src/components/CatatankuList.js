import React from "react";
import PropTypes from 'prop-types';
import CatatankuItem from "./CatatankuItem";

const CatatankuList = ({ notes }) => {
  return (
  <section className="notes-list">
    {notes.map((note) => {
      return <CatatankuItem key={note.id} {...note} />;
    })}
  </section>
  );
}
  
CatatankuList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default CatatankuList;
  