const mongoose = require ('mongoose'); 
    
const db = "mongodb+srv://Stephen:KOAwood23@project.diasua9.mongodb.net/OptimumPride?retryWrites=true&w=majority"; 
   
mongoose.connect(db).then(()=> {
  console.log("Connected to database");})
  .catch(()=>{ 
  console.log("Error Connecting to database");}) 
  //A schema matched the table in your database 

const finalSchema = new mongoose.Schema ({ 
  
  name:{type:String}, 
  gender:{type:String}, 
  description:{type:String}, 
  race:{type:String}, 
  job:{type:String} 
 
});

const Film = mongoose.model('character',finalSchema);
module.exports = Film; 
 
 