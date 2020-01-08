import React, { Component as C } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import LineCharts from './charts/LineCharts';
import AreaCharts from './charts/AreaCharts';
import BarCharts from './charts/BarCharts';
import { CHART_TYPE } from '../utils/Types';

class Charts extends C {
    constructor(props) {
        super(props);

        this.state = {
            type: this.props.type
            ,isCharts: this._isChart(this.props.type)
            ,options: this.props.options
            ,data: this.props.data
        }
    };

    _isChart(type) {
        const keys = Object.keys(CHART_TYPE);
        var types = [];
        for(var i=0; i<type.length; i++) {
            for(var o=0; o<keys.length; o++) {
                if(Array.from(CHART_TYPE[keys[o]]).indexOf(type[i]) > -1)
                types.push(keys[o]);
            }
        }
        return types;
    }

    UNSAFE_componentWillReceiveProps(props) {
        console.log('CHARTS componentWillReceiveProps');
        this.state.type = props.type;
        this.state.isCharts = this._isChart(props.type);
        this.state.options = props.options;
        this.state.data = props.data;
    }

    render() {
        var isCharts = this.state.isCharts;
        return (
            <div className={ "recharts-box" }>
                {(() => {
                    return isCharts.map((c, idx) => {
                        console.log(c);
                        if (c === "LINE") {
                            return (
                                <LineCharts
                                    key={ idx }
                                    type={ this.state.type[idx] }
                                    options={ this.state.options }
                                    data={ this.state.data }/>        
                            );
                        } else if (c === "AREA") {
                            return (
                                <AreaCharts
                                    key={ idx }
                                    type={ this.state.type[idx] }
                                    options={ this.state.options }
                                    data={ this.state.data }/>        
                            );
                        } else if (c === "BAR") {
                            return (
                                <BarCharts
                                    key={ idx }
                                    type={ this.state.type[idx] }
                                    options={ this.state.options }
                                    data={ this.state.data }/>        
                            );
                        } else {
                            return (
                                <div key={ idx }>Is This Not Chart Types!!!</div>
                            );
                        }
                    });
                })()}
            </div>
        );
    };
};

export default connect()(withRouter(Charts));
