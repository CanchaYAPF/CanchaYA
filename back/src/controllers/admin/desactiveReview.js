const {Review} = require ("../../db")

const desactiveReviewHr = async (id)=>{

  const review= await Review.findByPk(id);
  const newStatus = !review.approved
  if(!review){
    throw new Error("Reseña no encontrada");
  }else{
    await review.update({approved:newStatus })
    let estado;
    newStatus ===false ? estado = "desactivado" : estado = "activado"
    return{ mesaje: `estado de la reseña : ${estado}` }
  }
}
module.exports = desactiveReviewHr