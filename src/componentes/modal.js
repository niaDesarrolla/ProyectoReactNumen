import React, { useState, useEffect } from 'react';
import '../hojas-estilos/modal.css'; 

const MiModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      openModal(); // Abrir el modal después de 3 segundos 
    }, 3000);

    return () => {
      clearTimeout(timer); 
    };
  }, []);
  return (
    <div>

      {/* <button onClick={openModal}>Abrir Modal</button> */}

      {modalVisible && (
        <div className="modal card mx-auto text-light">
          <p className='titulo-emergente'>Bienvenidos a Sky Alert</p>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            </div>
        
      )}
    </div>
  );
};

export default MiModal;
