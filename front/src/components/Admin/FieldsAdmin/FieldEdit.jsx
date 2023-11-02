import { useState } from 'react';
import Modal from 'react-modal';
import EditFieldForm from '../EditFieldForm/EditFieldForm';
import styles from './FieldsAdmin.module.css'; // Asegúrate de que la ruta sea correcta

Modal.setAppElement('#root');

const FieldEdit = ({ field, getField }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button className={styles['btn-table']} onClick={openModal}>Editar</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Editar cancha"
      >
        <h2>Editar cancha</h2>
        <button onClick={closeModal}>Cerrar</button>
        <EditFieldForm field={field} getField={getField} closeModal={closeModal} />      
      </Modal>
    </div>
  );
};

export default FieldEdit;