const axios = require('axios');

function speakerService() {
    function getSpeakerById(id) {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:3000/api/speakers/' + id)
            .then((response) => {
                resolve(response);
            })
            .reject((error) => {
                reject(error);
            });
        });
    }

    return { getSpeakerById };
}

module.exports = speakerService();