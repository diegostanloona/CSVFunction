import fetch from 'node-fetch';

export const getCSVFromExternalURL = async (url) => {
    const res = await fetch(url);
    return await res.text();
};

export const checkIfExternalURL = (url) => url.slice(0, 4) === 'http';