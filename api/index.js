const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv") 
const authRoute = require("./routes/auth")
const usersRoute = require("./routes/users")
const movieRoute = require("./routes/movies")
const listsRoute = require("./routes/lists")


dotenv.config()
app.listen(8800, ()=>{
    console.log("Backend Server is running!");
})
app.use(express.json());
mongoose.connect(
process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>console.log("DB Connection Successfull! !"))
.catch((err)=>console.log(err));

app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/movies",movieRoute)
app.use("/api/lists",listsRoute)
