const app = require("./app");

const dotenv = require("dotenv");
const connectDB = require("./db");

dotenv.config();

connectDB();

const port = 8000;
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
