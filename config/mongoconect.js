const mongoose=require('mongoose');

const DB_URI ='mongodb://localhost:3000/'

mongoose.connect (DB_URI,
{
    userNewUrlParser:true, useUnifiedTopology:true},(err)=>{
        if (err){
            console.log("error de conexion");
        } else {
            console.log ("conexion correcta");
        }
    }
);