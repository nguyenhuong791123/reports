import React, { Component as C } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import SimpleLineChart from '../utils/line/SimpleLineChart';
import TinyLineChart from '../utils/line/TinyLineChart';
import DashedLineChart from '../utils/line/DashedLineChart';

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
            <div>
                <SimpleLineChart
                    data={ this.state.data }
                    options={ this.state.options } />

                <TinyLineChart
                    data={ this.state.data }
                    options={ this.state.options } />

                <DashedLineChart
                    data={ this.state.data }
                    options={ this.state.options } />
            </div>
        );
    };
};

export default connect()(withRouter(Charts));
