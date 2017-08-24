//TODO: Fikse driten

import axios from 'axios';
import { AsyncStorage } from 'react-native';
import * as storageUtils from '../utils/storage-utils';

async function getAccessToken() {
    const accessToken = await AsyncStorage.getItem('AccessToken').then(result => { return result });
    return accessToken;
}

const httpClient = () =>
    getAccessToken()
        .then(accessToken => {
            const defaultOptions = {
                headers: {
                    Authorization: accessToken ? accessToken : null,
                },
            };

            return {
                accessToken: accessToken,
                get: (url, options = {}) => axios.get(url, { ...defaultOptions, ...options }),
                post: (url, data, options = {}) => axios.post(url, data, { ...defaultOptions, ...options }),
                put: (url, data, options = {}) => axios.put(url, data, { ...defaultOptions, ...options }),
                delete: (url, options = {}) => axios.delete(url, { ...defaultOptions, ...options }),
            };
        })
        .catch(error => console.log(error));

export default httpClient;