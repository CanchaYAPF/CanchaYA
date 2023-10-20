import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    day: '2023-10-19',
    initialHour: '08:00:00',
    finalHour: '10:00:00',
    totalTime: 120,
    fieldName: 'Cancha 1',
    userId: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes realizar una solicitud POST al servidor con los datos de formData.
    // Por ejemplo, utilizando fetch() o axios.

    // Ejemplo de cómo podrías usar fetch:
    try {
      const response = await fetch('URL_DEL_API', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Procesar la respuesta si es necesario
        console.log('Solicitud POST exitosa');
      } else {
        console.error('Error en la solicitud POST');
      }
    } catch (error) {
      console.error('Error en la solicitud POST:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Day:
          <input
            type="date"
            name="day"
            value={formData.day}
            onChange={handleChange}
          />
        </label>
        <label>
          Initial Hour:
          <input
            type="time"
            name="initialHour"
            value={formData.initialHour}
            onChange={handleChange}
          />
        </label>
        <label>
          Final Hour:
          <input
            type="time"
            name="finalHour"
            value={formData.finalHour}
            onChange={handleChange}
          />
        </label>
        <label>
          Total Time:
          <input
            type="number"
            name="totalTime"
            value={formData.totalTime}
            onChange={handleChange}
          />
        </label>
        <label>
          Field Name:
          <input
            type="text"
            name="fieldName"
            value={formData.fieldName}
            onChange={handleChange}
          />
        </label>
        <label>
          User ID:
          <input
            type="number"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default Booking;
