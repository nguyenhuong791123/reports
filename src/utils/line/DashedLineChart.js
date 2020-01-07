import React, { Component as C } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class DashedLineChart extends C {
    constructor(props) {
        super(props);

        this.state = {
            options: this.props.options
            ,data: this.props.data
        }
    };

    render() {
        return (
            <LineChart
                width={500}
                height={300}
                data={ this.state.data }
                margin={{ top: 5, right: 30, left: 20, bottom: 5, }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
            </LineChart>
        )
    };
};

export default DashedLineChart;
