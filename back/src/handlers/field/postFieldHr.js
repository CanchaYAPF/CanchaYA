const postField = require("../../controllers/field/postField");

const postFieldHr = async (req, res) => {
  const { name, image, phone, address, city, paymentMethod, price, service,shift } = req.body;
  console.log("field",req.body)
  try {
    // const arrSports = sports.split(", ");
    const newField = await postField(
      name,
      image, 
      phone,
      address,
      city,
      paymentMethod, 
      price,
      service, 
      shift
      //   arrSports
    );
    res.status(200).json(newField);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postFieldHr;
