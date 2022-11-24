const details = require('./mongo');

details.deleteOne ({ name:'Antlion'}, function(err) {
    if (err) return handleError (err);
    console.log("Delete Successful!");
} );