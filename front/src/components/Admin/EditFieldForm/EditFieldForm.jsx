import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getField } from '../../../Redux/actions/form_actions';
import Modal from 'react-modal';
import FormContent from './FormContent';
import styles from './EditFieldForm.module.css'; 

Modal.setAppElement('#root');

const EditFieldForm = ({ field, closeModal }) => { 
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    sports: [],
    service: [],
    shift: [],
    address: '',
    phone: '',
    price: '',
  });

  useEffect(() => {
    if (field) {
      setFormData({
        name: field.name,
        sports: field.sports,
        service: Array.isArray(field.service) ? field.service : [],
        shift: Array.isArray(field.shift) ? field.shift : [],
        address: field.address,
        phone: field.phone,
        price: field.price,
      });
    }
  }, [field]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShiftChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, shift: [...formData.shift, value] });
    } else {
      setFormData({
        ...formData,
        shift: formData.shift.filter((shift) => shift !== value),
      });
    }
  };
  
  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, service: [...formData.service, value] });
    } else {
      setFormData({
        ...formData,
        service: formData.service.filter((service) => service !== value),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem('token'); 
  
    try {
      await axios.put(`http://localhost:3001/admin/fields/${field.id}`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      dispatch(getField());
      closeModal(); 
    } catch (error) {
      if (error.response) {
        console.error('Error al actualizar el campo:', error.response.data);
      } else {
        console.error('Error al realizar la petición:', error);
      }
    }
  };
  
  return (
    <Modal isOpen={true} className={styles.modalContent}>
      <button className={styles.modalbutton} onClick={closeModal}> 
        X
      </button>
      <FormContent formData={formData} handleChange={handleChange} handleShiftChange={handleShiftChange} handleServiceChange={handleServiceChange} handleSubmit={handleSubmit} />
    </Modal>
  );
};

export default EditFieldForm;