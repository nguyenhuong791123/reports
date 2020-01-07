import React, { Component as C } from 'react';
import { LineChart, Line } from 'recharts';

class TinyAreaChart extends C {
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
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
        )
    };
};

export default TinyAreaChart;
