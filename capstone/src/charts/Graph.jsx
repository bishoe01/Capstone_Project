import React, { useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
const data = [
    {
        name: "월",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "화",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "수",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "목",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "금",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
];
function Graph(props) {
    const [list, setList] = useState([true, true]);
    return (
        <>
            <section className='mt-10 flex flex-col py-12 gap-10'>
                <LineChart
                    width={720}
                    height={360}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {list[0] && <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />}
                    {list[1] && <Line type="monotone" dataKey="uv" stroke="#82ca9d" />}
                </LineChart>

                {/* <SectionCard text={'스터디/멘토링 등 소규모 모임'} direction='left'/>
                <SectionCard text={'개강총회, 학부행사 등 대규모 행사'} direction='right'/> */}
            </section>
            <button onClick={() => {
                setList([!list[0], list[1]]);
            }} className='p-2 border-white border-2 bg-primary'>first</button>
            <button onClick={() => setList([list[0], !list[1]])} className='p-2 bg-sub'>second</button>
        </>
    );
}

export default Graph;