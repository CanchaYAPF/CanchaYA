export const validate = (name,value)=>{
 let errors ={}
 //const regexImage = /(https:\/\/)([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg|jpeg)(\?[^\s[",><]*)?/;
 const regexPhone = /^[0-9]{10}$/;
 //Name:
 if(name==="name"){
    if(!value.name){
        errors.name = "Falta colocar el nombre de la cancha"
     }else if (value.name.length<5 || value.name.length>30){
        errors.name= "El nombre no puede tener menos de 5 y mas de 30 caracteres"
     }
 }
 
 //image:
 if(name==="image"){
    if (!value.image) {
        errors.image = "Falta colocar una imagen";
    }
 }

//address:
if(name==="address"){
    if(!value.address){
        errors.address="Falta colocar la dirección"
    }
}

//city:
if(name==="city"){
if(!value.city){
    errors.city="Falta colocar la ciudad"
}    
}

//phone:
if(name==="phone"){
if(!value.phone){
    errors.phone="Falta colocar el número de teléfono"
}else if (!regexPhone(value.phone)){
    errors.phone="El telefono tiene que ser un numero de 10 dígitos"
}    
}

//price:
if(name==="price"){
if(!value.price){
    errors.price= "Falta colocar el precio por hora"
}else if(isNaN(value.price)){
    errors.price ="El precio tiene que ser un número"
}else if(value.price>1){
    errors.price="No puede costar menos que uno"
}
}

}