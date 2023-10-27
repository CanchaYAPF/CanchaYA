const { conn } = require("./src/db.js");
const server = require("./src/app");

const PORT = 3001;


  .sync({ force: false })

  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
