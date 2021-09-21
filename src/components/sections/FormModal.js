import './FormModal.css';
import React, { useState } from 'react';
import Modal from 'react-modal';
import FlexArea from '../UI/FlexArea';

Modal.setAppElement('#root');

const FormModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <button id="contact" onClick={() => setModalIsOpen(true)}>Contact Me</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="Modal"
        overlayClassName="Overlay"

      >
        <FlexArea>
          <h1>title</h1>
        </FlexArea>
      </Modal>
    </>

  );
}
export default FormModal;
