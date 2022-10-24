
import nodeCSV from 'node-csv';
import { checkIfExternalURL, getCSVFromExternalURL } from './util/csv';

const csv = nodeCSV.createParser();

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
