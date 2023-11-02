import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getField, getSports } from "../../../Redux/actions/form_actions";
import Modal from 'react-modal';
import FormContent from './FormContent';
import styles from './EditFieldForm.module.css';

Modal.setAppElement('#root');

const EditFieldForm = ({ field, closeModal }) => {
  const dispatch = useDispatch();
  const [sports, setSports] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    sports: {},
    service: [],
    shift: [],
    address: '',
    phone: '',
    price: '',
  });

  useEffect(() => {
    dispatch(getSports()).then((response) => {
      const uniqueSports = [...new Set(response.payload.map(sport => sport.name))];
      setSports(uniqueSports);
    });

    if (field) {
      const sportsObject = {};
      if (Array.isArray(field.sports)) {
        field.sports.forEach(sport => {
          sportsObject[sport.name] = true;
        });
      }
      setFormData({
        name: field.name,
        sports: sportsObject,
        service: Array.isArray(field.service) ? field.service : [],
        shift: Array.isArray(field.shift) ? field.shift : [],
        address: field.address,
        phone: field.phone,
        price: field.price,
      });
    }
  }, [field, dispatch]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSportChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      sports: {
        ...formData.sports,
        [name]: checked,
      },
    });
  };

  const handleShiftChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        shift: [...formData.shift, value]
      });
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
      setFormData({
        ...formData,
        service: [...formData.service, value]
      });
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
      <button className={styles.modalbutton} onClick={closeModal}>X</button>
      <FormContent
        formData={formData}
        handleInputChange={handleInputChange}
        handleSportChange={handleSportChange}
        handleShiftChange={handleShiftChange}
        handleServiceChange={handleServiceChange}
        handleSubmit={handleSubmit}
        sports={sports}
      />
    </Modal>
  );
};

export default EditFieldForm;