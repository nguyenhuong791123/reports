import React, { Component as C } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class Charts extends C {
    constructor(props) {
        super(props);

        this.state = {
            options: this.props.options
            ,data: this.props.data
        }
    };

    // _delLastIndex() {
    //     const dl = this.state.items.data.length;
    //     this.state.items.data.splice([dl-1])
    //     this.state.items.data.map((obj) => {
    //         const ol = obj.length;
    //         if(dl > 0) {
    //             obj.splice([ol-1])
    //         }
    //         return obj
    //     });
    // }

    // componentDidMount() {
    //     this.props.isLoading(false);
    // }

    render() {
        // this._delLastIndex();
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
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>

            // <Chart
            //     chartType={ this.state.items.type }
            //     data={ this.state.items.data }
            //     options={ this.state.items.options }
            //     legendToggle />
        )
    };
};

export default connect()(withRouter(Charts));
