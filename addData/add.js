const data = require('./mongo');
const axios = require('axios');

const API = `https://www.moogleapi.com/api/v1/characters`;
var name;
var gender;
var description;
var race;
var job;

axios.get(API).then((response) => {
    name = response.data[0].name
    gender = response.data[0].gender
    description = response.data[0].description
    race = response.data[0].race
    job = response.data[0].job

    
    filmValue = data({
        name: name,
        gender: gender,
        description: description,
        race: race,
        job: job
    });

    filmValue
        .save()
        .then(result => {
            console.log("Success" + result);
        })
        .catch(error => {
            console.log("Error" + error);
        });
});
