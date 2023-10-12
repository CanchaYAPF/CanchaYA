import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { formCancha } from '../../Redux/actions/form_actions';
import './form.module.css'; 

const FormularioCancha = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    nombreCancha: '',
    direccionCancha: '',
    telefono: '',
    email: '',
    precioHora: '',
    turnos: [],
    metodosPago: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTurnoChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, turnos: [...formData.turnos, value] });
    } else {
      setFormData({
        ...formData,
        turnos: formData.turnos.filter((turno) => turno !== value),
      });
    }
  };

  const handleMetodoPagoChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, metodosPago: [...formData.metodosPago, value] });
    } else {
      setFormData({
        ...formData,
        metodosPago: formData.metodosPago.filter((metodo) => metodo !== value),
      });
    }
  };

  const handleSubmit = () => {
    dispatch(formCancha(formData));
  };

  return (
    <div className="form-container">
      <label className="form-label">
        Nombre de Cancha:
        <input
          type="text"
          className="form-input"
          name="nombreCancha"
          value={formData.nombreCancha}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
  Dirección de la Cancha:
  <input
    type="text"
    className="form-input"
    name="direccionCancha"
    value={formData.direccionCancha}
    onChange={handleChange}
  />
</label>

<label className="form-label">
  Número de Teléfono:
  <input
    type="text"
    className="form-input"
    name="telefono"
    value={formData.telefono}
    onChange={handleChange}
  />
</label>

<label className="form-label">
  Correo Electrónico:
  <input
    type="text"
    className="form-input"
    name="email"
    value={formData.email}
    onChange={handleChange}
  />
</label>

<label className="form-label">
  Precio por Hora:
  <input
    type="text"
    className="form-input"
    name="precioHora"
    value={formData.precioHora}
    onChange={handleChange}
  />
</label>

<label className="form-label">
  Turnos Disponibles:
  <input
    type="checkbox"
    className="form-checkbox"
    name="turnoManana"
    value="Mañana"
    checked={formData.turnos.includes('Mañana')}
    onChange={handleTurnoChange}
  />
  Mañana
  <input
    type="checkbox"
    className="form-checkbox"
    name="turnoTarde"
    value="Tarde"
    checked={formData.turnos.includes('Tarde')}
    onChange={handleTurnoChange}
  />
  Tarde
  <input
    type="checkbox"
    className="form-checkbox"
    name="turnoNoche"
    value="Noche"
    checked={formData.turnos.includes('Noche')}
    onChange={handleTurnoChange}
  />
  Noche
</label>

<label className="form-label">
  Métodos de Pago:
  <input
    type="checkbox"
    className="form-checkbox"
    name="metodoEfectivo"
    value="Efectivo"
    checked={formData.metodosPago.includes('Efectivo')}
    onChange={handleMetodoPagoChange}
  />
  Efectivo
  <input
    type="checkbox"
    className="form-checkbox"
    name="metodoDebito"
    value="Débito"
    checked={formData.metodosPago.includes('Débito')}
    onChange={handleMetodoPagoChange}
  />
  Débito
  <input
    type="checkbox"
    className="form-checkbox"
    name="metodoCredito"
    value="Crédito"
    checked={formData.metodosPago.includes('Crédito')}
    onChange={handleMetodoPagoChange}
  />
  Crédito
  <input
    type="checkbox"
    className="form-checkbox"
    name="metodoMercadoPago"
    value="MercadoPago"
    checked={formData.metodosPago.includes('MercadoPago')}
    onChange={handleMetodoPagoChange}
  />
  MercadoPago
</label>

      <button className="form-button" onClick={handleSubmit}>Agregar</button>
    </div>
  );
};

export default FormularioCancha;
