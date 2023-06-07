import React, { useState } from 'react';
import '../hojas-estilos/modal.css'; 

const Modal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>

      <button onClick={openModal}>Abrir Modal</button>

      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Bienvenidos a nuestra app de el clima</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
