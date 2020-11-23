import React from 'react';
import Plot from 'react-plotly.js';

function DatePlot(props) {
    const { officeDataPoints } = props;

    function unpack(rows, key) {
        return rows.map(function (row) { return row[key]; });
    }

    var scl = [[0, 'rgb(5, 10, 172)'], [0.35, 'rgb(40, 60, 190)'], [0.5, 'rgb(70, 100, 245)'], [0.6, 'rgb(90, 120, 245)'], [0.7, 'rgb(106, 137, 247)'], [1, 'rgb(220, 220, 220)']];
    var data = [{
        type: 'scattergeo',
        locationmode: 'USA-states',
        lon: unpack(officeDataPoints, 'lon'),
        lat: unpack(officeDataPoints, 'lat'),
        hoverinfor: join(unpack(officeDataPoints, 'cityName'), datesValue(unpack(officeDataPoints, 'currentProcessingDate'))),
        text: join(unpack(officeDataPoints, 'cityName'), datesValue(unpack(officeDataPoints, 'currentProcessingDate'))),
        mode: 'markers',
        marker: {
            size: 8,
            opacity: 0.8,
            colorscale: 'Portland',
            symbol: 'square',
            line: {
                width: 1,
                color: 'rgb(102,102,102)'
            },
            color: datesValue(unpack(officeDataPoints, 'currentProcessingDate')),
            colorbar: {
                title: 'Waiting Time (Days)'
            }
        }
    }];

    return (
        <Plot
            data={data}
            layout={{
                colorbar: true,
                geo: {
                    scope: 'usa',
                    projection: {
                        type: 'albers usa'
                    },
                    showland: true,
                    landcolor: 'rgb(250,250,250)',
                    subunitcolor: 'rgb(217,217,217)',
                    countrycolor: 'rgb(217,217,217)',
                    countrywidth: 0.5,
                    subunitwidth: 0.5
                },
                width: 640,
                height: 480,
                title: `Processing time for all cities`,
            }}
        />
    );
}

function join(arr1, arr2) {
    return arr1.map((a1, i1) => {
        return a1 + ' ' + arr2[i1];
    });
}

// converts date like 2020-11-08 to the difference in days from now
function datesValue(dates) {
    return dates.map(d => daysFromNow(d));
}

function daysFromNow(date) {
    return Math.round((Date.now() - (new Date(date)).getTime()) / 1000 / 60 / 60 / 24);
}

export default DatePlot;