const { conn } = require("./src/db.js");
const server = require("./src/app");

const PORT = 3001;

conn
  .sync({ force: false})
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
