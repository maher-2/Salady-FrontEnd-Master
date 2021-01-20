import axios from 'axios';
import StoreProvider from '../redux';


export const client = (config = { withToken: false, headers: {} }, server = 'BASESERVER') => {

    const { token } = StoreProvider.getState().auth;

    const { properties: { lang } } = StoreProvider.getState().settings;

    const { headers, withToken } = config;


    if (withToken) {
        axios.defaults.headers.common['authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['authorization'];
    }

    return axios.create({
        baseURL: process.env[`REACT_APP_${server}`],
        headers: {
            'Accept-Language': lang,
            "Access-Control-Allow-Origin": '*',
            ...headers
        },
        timeout: 0,
        timeoutErrorMessage: "Server Timeout"
    })


}
