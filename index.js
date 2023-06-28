const  express = require('express')
const mongoose = require('mongoose');

require('dotenv').config();
const cors=require('cors')

const dburl =process.env.DB_URL;

mongoose.connect(dburl, {useNewUrlParser: true});

const con =mongoose.connection;

const app =express();
app.use(cors({origin:true}))

app.use(express.json());
app.use(express.urlencoded({extended:false}));


try{
    con.on('open', () => {
        console.log("Mongodb connected!!!");
    });
}catch(error){
    console.log("Error: " +error);
 }
 const port =process.env.PORT
 const mentorRouter =require('./routes/mentor')
 app.use("/mentor", mentorRouter);

  const studentRouter =require('./routes/student')
 app.use("/students", studentRouter);
 
 app.listen(port, () => {
     console.log("This Node application is running on port " + port);

   
});
//app.listen(arg1, callback_function);