const postField = require("../../controllers/field/postField");

const postFieldHr = async (req, res) => {
  const { name, image,sports, phone, address, city, paymentMethod, price, service,shift,token } = req.body;
  try {
    
    const newField = await postField(
      name,
      image, 
      sports,
      phone,
      address,
      city,
      paymentMethod, 
      price,
      service, 
      shift,
      token
      
    );
    res.status(200).json(newField);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postFieldHr;
