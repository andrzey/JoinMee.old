import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/';

export function loginWithFacebook(facebookToken) {
    return new Promise((resolve, reject) => {
        if (!facebookToken) return reject('Facebook token not provided');

        const url = `${apiUrl}facebookAuth`;

        axios.post(url, { token: facebookToken })
            .then(response => {
                console.log(response);
                resolve(response.data)
            })
            .catch(error => {
                console.log(error);
                reject(error)
            });
    });
}