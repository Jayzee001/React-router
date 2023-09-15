import React from 'react';

const Modal = ({ movie, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{movie.title}</h2>
        <p>Description: {movie.desc}</p>
        <p>Rating: {movie.rating}</p>
      </div>
    </div>
  );
};

export default Modal;