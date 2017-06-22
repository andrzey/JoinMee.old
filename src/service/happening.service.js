import axios from 'axios';

//const apiUrl = 'http://localhost:8080/api/';
const apiUrl = 'http://10.0.1.193:8080/api/';

export function loadMyHappenings(accessToken) {
    return new Promise((resolve, reject) => {
        if (!accessToken) return reject('Accesstoken not provided');

        const url = `${apiUrl}loadmyhappenings`;

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

export function addHappening(accessToken, happening) {
    return new Promise((resolve, reject) => {
        if (!accessToken) return reject('Accesstoken not provided');
        if (!happening) return reject('Happening not provided');

        const url = `${apiUrl}addHappening`;

        axios.defaults.headers.common['Authorization'] = accessToken;

        axios.post(url, happening)
            .then(response => {
                resolve(response.data.happening);
            })
            .catch(error => {
                reject(error)
            });
    });
}

export function joinHappening(accessToken, name, happeningId) {
    return new Promise((resolve, reject) => {
        if (!accessToken) return reject('Accesstoken not provided');
        if (!name) return reject('Name not provided');
        if (!happeningId) return reject('HappeningId not provided');

        const url = `${apiUrl}joinHappening`;

        axios.defaults.headers.common['Authorization'] = accessToken;

        axios.post(url, { name, happeningId })
            .then(response => {
                resolve(response.data.happening);
            })
            .catch(error => {
                reject(error)
            });
    });
}

export function leaveHappening(accessToken, name, happeningId) {
    return new Promise((resolve, reject) => {
        if (!accessToken) return reject('Accesstoken not provided');
        if (!name) return reject('Name not provided');
        if (!happeningId) return reject('HappeningId not provided');

        const url = `${apiUrl}leaveHappening`;

        axios.defaults.headers.common['Authorization'] = accessToken;

        axios.post(url, { name, happeningId })
            .then(response => {
                resolve(response.data.happening);
            })
            .catch(error => {
                reject(error)
            });
    });
}