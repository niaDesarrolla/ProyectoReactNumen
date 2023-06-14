import '../hojas-estilos/modal.css'; 
import React, { useState, useEffect } from 'react';

const MiModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  useEffect(() => {
    const handleLinkClick = () => {
      closeModal(); // Cerrar el modal cuando se hace clic en un enlace del navbar
    };

    // Agregar un evento de clic a todos los enlaces del navbar
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      // Eliminar los eventos de clic al desmontar el componente
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      openModal(); // Abrir el modal después de 3 segundos
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
