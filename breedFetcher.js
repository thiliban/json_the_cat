const request = require('request');

const fetchBreedDescription= function(breed, callback) {
    request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
        if(error) {
            callback(`Request details failed ${error}`, null);
        }
        else {
            const data = JSON.parse(body);
            if (data.length === 0) {
                error = 'The breed that\'s been requested has not been found';
                callback(error);
            }
            else {
                callback(error, data[0].description);
            }
        }
    });
};

module.exports ={ fetchBreedDescription };