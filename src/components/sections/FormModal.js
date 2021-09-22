import './FormModal.css';

import Modal from 'react-modal';

import Form from './Form';

Modal.setAppElement('#root');

const FormModal = ({ modalIsOpen, setModalIsOpen }) => {


  return (
    <>
      <button id="contact" onClick={() => setModalIsOpen(true)}>Contact Me</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="Modal"
        overlayClassName="Overlay"
      >
        <h1 id="form-title">Contact Me</h1>
        <Form />
      </Modal>
    </>
  );
}
export default FormModal;
