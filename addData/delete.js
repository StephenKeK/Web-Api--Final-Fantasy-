const details = require('./mongo');

details.deleteOne ({ name:'Black Mage'}, function(err) {
    if (err) return handleError (err);
} );