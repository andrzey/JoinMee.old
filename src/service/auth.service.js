import axios from 'axios';

const authUrl = 'http://localhost:8080/auth/';

export function loginWithFacebook(facebookToken) {
    return new Promise((resolve, reject) => {
        if (!facebookToken) return reject('Facebook token not provided');

        const url = `${authUrl}facebookAuth`;
        axios.post(url, { token: facebookToken })
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            });
    });
}