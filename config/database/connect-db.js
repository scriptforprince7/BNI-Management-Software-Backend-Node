
//importing mongoose
const { Db } = require("mongodb");
const mongoose=require("mongoose");
const DB_URL=process.env.dburl ;

//connecting to database  
const dbConnect=async()=>{
    try{
        //added to prevent deprecation warning  for strict Query

        mongoose.connect(DB_URL) 

        console.log("db connected");
    }

    catch(error){
        
        console.log(error.message); 
    }
}

module.exports= dbConnect;