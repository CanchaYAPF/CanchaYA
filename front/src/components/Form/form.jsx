import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom'; 
import styles from './Form.module.css';
import { formCancha, getSports, getCities } from '../../Redux/actions/form_actions';
import Swal from 'sweetalert2'
/* import NavBar from '../NavBar/NavBar'; */
import axios from "axios"

const validate = ({name, image, sports, address, city, phone, price, shift, paymentMethod, service}) => {
  let errors = {}
  let regexNotNumbers = /([0-9])+/;
  let regexImg = (/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i);
  let regexPhone = /^[0-9]{10}$/; 

  if (!name) {
    errors.name = 'Por favor, ingrese nombre de la cancha';
  } else if (name.length > 30 || name.length < 2) {
    errors.name = 'El nombre debe contener más de 2 caracteres y menos de 30';
  }

  if (!address) {
    errors.address = 'Por favor, ingrese una dirección';
  } else if (address.length > 20 || address.length < 2) {
    errors.address = 'La dirección debe contener más de 2 caracteres y menos de 20';
  }

  if (!sports) {
    errors.sports = 'Por favor, ingrese al menos un deporte';
  }
  if (!city) {
    errors.city = 'Por favor, ingrese una ciudad';
  }
  if (!shift) {
    errors.shift = 'Por favor, ingrese turno';
  }
  if (!paymentMethod) {
    errors.paymentMethod = 'Por favor, ingrese al menos un método de pago';
  }
  if (!service) {
    errors.service = 'Por favor, ingrese al menos un servicio';
  }

  if (!image) {
    errors.image = 'Por favor, inserta una imagen';
  } else if (!regexImg.test(image.trim())) {
    errors.image = 'Por favor, ingrese un formato válido';
  }

  if (!phone) {
    errors.phone = 'Por favor, ingrese un número de teléfono';
  } else if (!regexPhone.test(phone)) {
    errors.phone = 'El número de teléfono debe tener exactamente 10 dígitos, sin guiones ni caracteres';
  }

  if (!price) {
    errors.price = 'Por favor, ingrese un precio';
  } else if (!regexNotNumbers.test(price)) {
    errors.price = 'El precio debe contener solo números';
  }

  return errors;
}




const FormularioCancha = () => {
  const token = sessionStorage.getItem(`token`)
  const navigate= useNavigate()
  const allSports = useSelector(state => state.sportData)
  const allCities = useSelector(state => state.citiesData)



 const dispatch = useDispatch();


 const [errors, setErrors] = useState({});


  useEffect(() => {
    dispatch(getSports())
    dispatch (getCities())
   if (token === null) navigate("/login")
  }, []);
   
 
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    sports:[],
    address: '',
    city: '',
    phone: '',
    price: '',
    shift: [],
    paymentMethod: [],
    service: [],
    token:token
  });
  // const [errors,setErrors]=useState({
  //   name: '',
  //   image: '',
  //   sport:'',
  //   address: '',
  //   city: '',
  //   phone: '',
  //   price: '',
  //   shift: [],
  //   paymentMethod: [],
  //   service: [],
  //   token:token
  // })

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === "phone" || name === "price") {
      const numericValue = value.replace(/\D/g, ''); // Solo permite números
  
      
        setFormData({ ...formData, [name]: numericValue });
      
    } else if (name === "sports") {
      console.log("entro");
      if (formData.sports.includes(value)) return;
      setFormData({
        ...formData,
        sports: [...formData.sports, value],
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  
    setErrors(
      validate({
        ...formData,
        [name]: value,
      })
    );
  };
  
  

  

  const handleTurnoChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      if(!checked.value)
      setFormData({ ...formData, shift: [...formData.shift, value] });
    } else {
      setFormData({
        ...formData,
        shift: formData.shift.filter((turno) => turno !== value),
      });
    }
  };

  const handleMetodoPagoChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, paymentMethod: [...formData.paymentMethod, value] });
    } else {
      setFormData({
        ...formData,
        paymentMethod: formData.paymentMethod.filter((metodo) => metodo !== value),
      });
    }
  };

  const handleServicioChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, service: [...formData.service, value] });
    } else {
      setFormData({
        ...formData,
        service: formData.service.filter((servicio) => servicio !== value),
      });
    }
  };
  //Cloudinary:

 const handleImageChange = async (e) => {
  const file = e.target.files[0];
  const data = new FormData();
  data.append("file", file)
  data.append("upload_preset","fields")
  const response = await axios.post('https://api.cloudinary.com/v1_1/dujhqsogz/image/upload',data)
  setFormData({ ...formData, image: response.data.secure_url })
 }

 


  const handleSubmit = async(e) => {
    e.preventDefault();
    let error = Object.keys(validate(formData));
      if (error.length || !formData.sports.length || !formData.phone.length) {
        alert("Falta completar datos");
        errors.sports = "falta completar datos";
        errors.phone = "falta completar datos";
      }{
    dispatch(formCancha(formData));
    Swal.fire(
      'Cancha Subida con exito',
      'You clicked the button!',
      'success'
    )
     setFormData({
      name: '',
      image: '',
      sports:[],
      address: '',
      city: '',
      phone: '',
      price: '',
      shift: [],
      paymentMethod: [],
      service: [],
    });
   }
  };

  return (
    <div className={styles.master}>      
    <div className={styles.container}>
    <div className={styles.formContainer}>      
      <label className={styles.formLabel}>Nombre de Cancha:</label>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.formInput}
        name="name"
        value={formData.name}
        onChange={handleChange}
        />      
       {errors.name && <p className={styles.error}>{errors.name}</p>}


      <label className={styles.formLabel}>Imagen:</label>
      <input
        type="file"
        accept="image/*"
        className={styles.formInput}
        name="image"
        onChange={handleImageChange}
        style={{ 
    width: '99.5%', 
    padding: '7px', 
    margin: '5px 0', 
    border: '1px solid #292929', 
    borderRadius: '3px', 
  }}
        />

      {formData.image && <img src={formData.image} alt="Imagen de la cancha" style={{maxWidth: "50%", height: 'auto',}}/>}
      
      
      <label>Deportes: </label>
        <select onChange={handleChange} name="sports">
        {allSports?.map(s=>  <option value={s.name} key={s.id}> {  s.name  } </option>   )}
      </select>

         <div>
          {
            formData.sports.map((s)=> <div key={s}> {s} 
            <button  name='sport' id={s}  ></button>
            
            
            </div> )
          }</div> 
          {errors.sports && <p className={styles.error} >{errors.sports}</p>}


      <label className={styles.formLabel}>Dirección de la Cancha:</label>
      <input
        type="text"
        className={styles.formInput}
        name="address"
        value={formData.address}
        onChange={handleChange}
        />
        {errors.address && <p className={styles.error} >{errors.address}</p>}


<label className={styles.formLabel}>Ciudad:</label>
<select
  className={styles.formSelect}
  name="city"
  value={formData.city}
  onChange={handleChange}
>
  <option value="">Selecciona una ciudad</option>
  {allCities.map((city) => (
    <option key={city} value={city}>
      {city}
    </option>
  ))}
  </select>
       {errors.city && <p className={styles.error}>{errors.city}</p>}



      <label className={styles.formLabel}>Teléfono:</label>
      <input
        type="text"
        className={styles.formInput}
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        />
        {errors.phone && <p className={styles.error} >{errors.phone}</p>}



      <label className={styles.formLabel}>Precio por Hora:</label>
      <input
        type="text"
        className={styles.formInput}
        name="price"
        value={formData.price}
        onChange={handleChange}
        />
        {errors.price && <p className={styles.error} >{errors.price}</p>}

        
 

      <div className={styles.formLabel}>Turnos Disponibles:</div>
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="turnoManana"
        value="Mañana"
        checked={formData.shift.includes('Mañana')}
        onChange={handleTurnoChange}
        />
      Mañana
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="turnoTarde"
        value="Tarde"
        checked={formData.shift.includes('Tarde')}
        onChange={handleTurnoChange}
        />
      Tarde
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="turnoNoche"
        value="Noche"
        checked={formData.shift.includes('Noche')}
        onChange={handleTurnoChange}
        />
      Noche
      {errors.shift && <p className={styles.error} >{errors.shift}</p>}

      

      <div className={styles.formLabel}>Métodos de Pago:</div>
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="metodoEfectivo"
        value="Efectivo"
        checked={formData.paymentMethod.includes('Efectivo')}
        onChange={handleMetodoPagoChange}
        />
      Efectivo
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="metodoDebito"
        value="Débito"
        checked={formData.paymentMethod.includes('Débito')}
        onChange={handleMetodoPagoChange}
        />
      Débito
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="metodoCredito"
        value="Crédito"
        checked={formData.paymentMethod.includes('Crédito')}
        onChange={handleMetodoPagoChange}
        />
      Crédito
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="metodoMercadoPago"
        value="MercadoPago"
        checked={formData.paymentMethod.includes('MercadoPago')}
        onChange={handleMetodoPagoChange}
        />
      MercadoPago
      {errors.paymentMethod && <p className={styles.error} >{errors.paymentMethod}</p>}

      

      <div className={styles.formLabel}>Servicios:</div>
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="estacionamiento"
        value="Estacionamiento"
        checked={formData.service.includes('Estacionamiento')}
        onChange={handleServicioChange}
        />
      Estacionamiento
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="tribunas"
        value="Tribunas"
        checked={formData.service.includes('Tribunas')}
        onChange={handleServicioChange}
        />
      Tribunas
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="vestuarios"
        value="Vestuarios"
        checked={formData.service.includes('Vestuarios')}
        onChange={handleServicioChange}
        />
      Vestuarios
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="duchas"
        value="Duchas"
        checked={formData.service.includes('Duchas')}
        onChange={handleServicioChange}
        />
      Duchas
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="kiosco"
        value="Kiosco"
        checked={formData.service.includes('Kiosco')}
        onChange={handleServicioChange}
        />
      Kiosco
      {errors.service && <p className={styles.error} >{errors.service}</p>}


      <button className={styles.formButton} >Agregar</button>
      </form>
    </div>
        </div>
        </div>
  );
};



export default FormularioCancha;


  

