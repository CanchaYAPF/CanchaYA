import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../../Redux/actions/admin_actions';
import styles from './EditUserForm.module.css';
import Modal from 'react-modal';
import FormContent from './FormContent';

Modal.setAppElement('#root');

const EditUserForm = ({ user, getUsers, closeModal }) => { 
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    mail: '',
    password: '',
    phone: '',
    birthdate: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        lastname: user.lastname,
        mail: user.mail,
        password: user.password,
        phone: user.phone,
        birthdate: user.birthdate,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem('token'); 
    await axios.put(`http://localhost:3001/admin/${user.id}`, formData, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    dispatch(getUsers());
    closeModal(); 
  };
  return (
    <Modal isOpen={true} className={styles.modalContent}>
      <button className={styles.modalbutton} onClick={closeModal}> 
        X
      </button>
      <FormContent formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    </Modal>
  );
};

export default EditUserForm;