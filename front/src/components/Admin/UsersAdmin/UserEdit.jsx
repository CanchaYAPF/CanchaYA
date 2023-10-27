import { useState } from 'react';
import Modal from 'react-modal';
import EditUserForm from '../../Admin/EditUserForm/EditUserForm';
import style from './UserCard.module.css';

Modal.setAppElement('#root');

const UserEdit = ({ user, getUsers }) => {
   const [modalIsOpen, setModalIsOpen] = useState(false);
 
   const openModal = () => {
     setModalIsOpen(true);
   };
 
   const closeModal = () => {
     setModalIsOpen(false);
   };
 
   return (
     <div>
       <button className={style['btn-table']} onClick={openModal}>Editar</button> {/* Aplica la clase CSS aquí */}
       <Modal
         isOpen={modalIsOpen}
         onRequestClose={closeModal}
         contentLabel="Editar perfil"
       >
         <h2>Editar perfil</h2>
         <button onClick={closeModal}>Cerrar</button>
         <EditUserForm user={user} getUsers={getUsers} closeModal={closeModal} />      
       </Modal>
     </div>
   );
 };
 
 export default UserEdit;