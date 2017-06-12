import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/';

export function loadHappenings(accessToken) {
    return new Promise((resolve, reject) => {
        if (!accessToken) return reject('Accesstoken not provided');

        const url = `${apiUrl}loadhappenings`;

        axios.defaults.headers.common['Authorization'] = accessToken;

        axios.get(url)
            .then(response => {
                resolve(response.data.happenings)
            })
            .catch(error => {
                reject(error)
            });
    });
}

export function addComment(accessToken, happeningId, comment) {
    return new Promise((resolve, reject) => {
        if (!accessToken) return reject('Accesstoken not provided');
        if (!happeningId) return reject('HappeningId not provided');
        if (!comment) return reject('Comment not provided');

        const url = `${apiUrl}addComment`;

        axios.defaults.headers.common['Authorization'] = accessToken;

        axios.post(url, { happeningId, comment })
            .then(response => {
                resolve(response.data.happening);
            })
            .catch(error => {
                reject(error)
            });
    });
}