export const validate = (values)=>{
 let errors ={}
 //const regexImage = /(https:\/\/)([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg|jpeg)(\?[^\s[",><]*)?/;
 const regexPhone = /^[0-9]{10}$/;
 //Name:
 if(!values.name){
    errors.name = "Falta colocar el nombre de la cancha"
 }else if (values.name.length<5 || values.name.length>30){
    errors.name= "El nombre no puede tener menos de 5 y mas de 30 caracteres"
 }
 //image:
 if (!values.image) {
    errors.image = "Falta colocar una imagen";
}
//address:
if(!values.address){
    errors.address="Falta colocar la dirección"
}
//city:
if(!values.city){
    errors.city="Falta colocar la ciudad"
}
//phone:
if(!values.phone){
    errors.phone="Falta colocar el número de teléfono"
}else if (!regexPhone(values.phone)){
    errors.phone="El telefono tiene que ser un numero de 10 dígitos"
}
//price:
if(!values.price){
    errors.price= "Falta colocar el precio por hora"
}else if(isNaN(values.price)){
    errors.price ="El precio tiene que ser un número"
}else if(values.price>1){
    errors.price="No puede costar menos que uno"
}
}