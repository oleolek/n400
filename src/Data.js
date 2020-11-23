import { officeCodes } from './data/office_codes';
import { usCities } from './data/cities';

export function parseOfficeDataPoints(data) {
    return data.map(e => {
        const officeCode = stripDateSuffix(e.office_code);
        return {
            "officeCode": officeCode,
            "runDate": e.runDate,
            "currentProcessingDate": e.currentProcessingDate,
            ...officeCityGeo(officeCode),
        };
    });
}

export function officeCityGeo(officeCode) {
    const office = officeCodes.find(o => o.office_code == officeCode);
    if (!office) {
        return null;
    }

    const officeCityParts = office.office_description.split(' ');
    // dropping the state suffix
    const cityName = officeCityParts.slice(0, officeCityParts.length - 1).join(' ');

    const usCity = usCities.find(c => c.name == cityName);
    if (!usCity) {
        return null;
    }

    return {
        cityName: usCity.name,
        lat: usCity.lat,
        lon: usCity.lon,
    };
}

function stripDateSuffix(officeCode) {
    return officeCode.split("-")[0];
}