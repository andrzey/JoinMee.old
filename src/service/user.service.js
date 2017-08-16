import axios from 'axios';

const userUrl = 'http://localhost:8080/user/';

export function updateUserInterests(accessToken, interests) {
    return new Promise((resolve, reject) => {
        if (!accessToken) return reject('Accesstoken not provided');
        if (!interests) return reject('Interests not provided');

        const url = `${userUrl}updateinterests`;
        axios.defaults.headers.common['Authorization'] = accessToken;

        axios.post(url, { interests: interests })
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            });
    });
}