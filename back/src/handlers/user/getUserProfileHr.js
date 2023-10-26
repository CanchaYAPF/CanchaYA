
const getUserProfileHr = async (req, res) => {
  const bearerHeader = req.headers['authorization'];
    let token= bearerHeader.split(' ')[1]
    try {
      const userProfile= getUserProfile(token)
      res.status(200).json(userProfile)
    } catch (error) {
      res.status(400).send({error:error.message})
    }
  }

module.exports = getUserProfileHr;