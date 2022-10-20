
import nodeCSV from 'node-csv';
import fetch from 'node-fetch';

const csv = nodeCSV.createParser();

const getCSVFromExternalURL = async (url) => {
    const res = await fetch(url);
    return await res.text();
};

const checkIfExternalURL = (url) => url.slice(0, 4) === 'http';

const mainCSVFunction = async (url, transformerFunction) => {
    if (checkIfExternalURL(url)) {
        const csvString = await getCSVFromExternalURL(url);
        csv.parse(csvString, (err, data) => {
            transformerFunction(data);
        })
    } else {
        csv.parseFile(url, (err, data) => {
            transformerFunction(data);
        });
    }
};
