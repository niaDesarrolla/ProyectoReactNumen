
import '../hojas-estilos/modal.css'; 
import React, { useState, useEffect } from 'react';

const Modal = () => {
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
