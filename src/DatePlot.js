import React from 'react';
import Plot from 'react-plotly.js';

function DatePlot(props) {
    const { officeDataPoints } = props;
    const x = officeDataPoints.map(p => p.runDate);
    const y = officeDataPoints.map(p => p.currentProcessingDate);
    const office = officeDataPoints[0].officeCode;
    return (
        <Plot
            data={[
                {
                    x,
                    y,
                    mode: 'lines',
                    type: 'scatter',
                },
            ]}
            layout={{
                xaxis: {
                    title: 'Date',
                    type: 'date',
                },
                yaxis: {
                    title: 'Processing Date',
                    type: 'date',
                },
                width: 640,
                height: 480,
                title: `Processing time for ${office}`,
            }}
        />
    );
}

export default DatePlot;