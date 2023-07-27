import axios from "axios";

const defaultHeaderConfig = {
    Accept: 'application/json; charset=utf-8',
}

export async function request(url, method, data = {}, params = {}) {
    const req = {
        url: url,
        method: method,
        headers: Object.assign({}, defaultHeaderConfig),
        data: data,
        params: params
    }
    let response
    try {
        response = await axios(req)
    } catch (error) {
        response = error.response
    }

    return response
}