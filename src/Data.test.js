import { parseOfficeDataPoints } from './Data';
import { seaData } from './data/sea';
import { allData } from './data/all';

test('parses data correctly', () => {
    expect(seaData.length > 0).toBeTruthy();

    const officeData = parseOfficeDataPoints(seaData);
    expect(officeData.length > 0).toBeTruthy();
    officeData.forEach(e => {
        expect(e.officeCode).toEqual("SEA");
        expect(e.cityName).toEqual("Seattle");
        expect(e.lat).toEqual(47.6038321);
        expect(e.lon).toEqual(-122.3300624);
    });
});

test('parses data correctly', () => {
    expect(allData.length > 0).toBeTruthy();

    const officeData = parseOfficeDataPoints(allData);
    expect(officeData.length > 0).toBeTruthy();
    officeData.forEach(e => {
        expect(e.officeCode).toBeTruthy();
        expect(e.cityName).toBeTruthy();
    });
});