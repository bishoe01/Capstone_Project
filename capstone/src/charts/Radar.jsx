import React from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";
function Radar(props) {
    const data = [
        {
            name: "2인",
            uv: 10,
            pv: 2400,
            fill: "#8884d8"
        },
        {
            name: "3인",
            uv: 20,
            pv: 4567,
            fill: "#83a6ed"
        },
        {
            name: "4인",
            uv: 15.69,
            pv: 1398,
            fill: "#8dd1e1"
        },
    ];

    const style = {
        top: 0,
        left: 350,
        lineHeight: "24px"
    };
    return (
        <div>
            <RadialBarChart
                width={1000}
                height={400}
                innerRadius="10%"
                outerRadius="80%"
                data={data}
                startAngle={180}
                endAngle={0}
            >
                <RadialBar minAngle={15} label={{ fill: '#666', position: 'End' }} background clockWise={true} dataKey='uv' />
                <Legend iconSize={10} width={200} height={140} layout='vertical' verticalAlign='middle' align="right" />
                {/* <Tooltip /> */}
            </RadialBarChart>
        </div>
    );
}

export default Radar;