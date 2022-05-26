import React from "react";
import ChartBar from "./ChatBar";
import './Chart.css';

const Chart = (props) => {

    const valueDataPoints= props.dataPoints.map(data => data.value);
    console.log(valueDataPoints);

    const maxValue=Math.max(...valueDataPoints);
    console.log(maxValue);

    return <div className="chart">
        {
            props.dataPoints.map(data => <ChartBar 
                key={data.label}
                value={data.value}
                label={data.label}
                maxValue={maxValue}/> )

        }
            
        </div>
}

export default Chart;