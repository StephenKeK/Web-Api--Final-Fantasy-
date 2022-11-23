const mongoose = require('mongoose'); 
const db = 'mongodb+srv://Stephen:KOAwood23@project.diasua9.mongodb.net/OptimumPride?retryWrites=true&w=majority'
  
mongoose.connect(db).then(()=> {
    console.log("Connected to database");})
    .catch(()=>{ 
    console.log("Error Connecting to database");}) 
    //A schema matched the table in your database 

const heroSchema = new mongoose.Schema ({ 
    Title:{type:String},
    Year:{type:String}, 
    PopularityRank:{type:String}, 
    YtbLink:{type:String},
});
 
const Film = mongoose.model('records',heroSchema);
module.exports = Film; 