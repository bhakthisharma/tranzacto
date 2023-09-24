const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
app.use(cors())

const { bgCyan } = require("colors");
require("colors");
const connectDb = require("./config/config");
dotenv.config();
connectDb();
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.get("/",(res, req)=>{
res.send("<h1>POS BACKEND</h1>");
});

// app.use("/api/items", require("./routes/itemRoutes"));

const PORT = process.env.PORT || 2129;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`.bgCyan.white);
});