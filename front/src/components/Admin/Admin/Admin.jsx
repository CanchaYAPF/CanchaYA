import { useState } from "react"
import UsersAdmin from "../UsersAdmin/UsersAdmin"
import FieldsAdmin  from "../FieldsAdmin/FieldsAdmin"
import BookingAdmin from "../BookingAdmin/BokingsAdmin"
import style from "./Admin.module.css"
import ReviewAdmin from "../ReviewAdmin/ReviewAdmin"

const Admin =()=>{
  const [activeTab, setActiveTab] = useState('Usuarios');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
 return(
    <div>
      <div className={style['profile-container']}>
      <button
      onClick={() => handleTabClick('Usuarios')}
      className={`${style['tab-button']} ${activeTab === 'Usuarios' ? style.active : ''}`}>
      Usuarios</button>
      <button
      onClick={() => handleTabClick('Canchas')}
      className={`${style['tab-button']} ${activeTab === 'Canchas' ? style.active : ''}`}>
      Canchas</button>
      <button
      onClick={() => handleTabClick('Reservas')}
      className={`${style['tab-button']} ${activeTab === 'Reservas' ? style.active : ''}`}>
      Reservas</button>
      <button
      onClick={() => handleTabClick('Reseñas')}
      className={`${style['tab-button']} ${activeTab === 'Reseñas' ? style.active : ''}`}>
      Reseñas</button>
      </div>
      {activeTab === 'Usuarios' && (
            <div >
              <h2 className={style['Usuarios']}>Usuarios</h2>
              <UsersAdmin/>
            </div>
          )}
      {activeTab === 'Canchas' && (
            <div >
              <h2 className={style['Canchas']}>Canchas</h2>
              <FieldsAdmin />
            </div>
          )}  
      {activeTab === 'Reservas' && (
            <div >
              <h2 className={style['Reservas']}>Reservas</h2>
              <BookingAdmin/>
            </div>
          )}     
        {activeTab === 'Reseñas' && (
            <div >
              <h2 className={style['Reseñas']}>Reseñas</h2>
              <ReviewAdmin/>
            </div>
          )} 
           
        


      
      

      </div>
 )
}
export default Admin
