import React, { Component as C } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import LineCharts from './charts/LineCharts';
import { CHART_TYPE } from '../utils/Types';

class Charts extends C {
    constructor(props) {
        super(props);

        this.state = {
            type: this.props.type
            ,isChart: this._isChart(this.props.type)
            ,options: this.props.options
            ,data: this.props.data
        }
    };

    _isChart(type) {
        const keys = Object.keys(CHART_TYPE);
        for(var i=0; i<keys.length; i++) {
            if(Array.from(CHART_TYPE[keys[i]]).indexOf(type) > -1)
                return keys[i]
        }
        return "LINE";
    }

    UNSAFE_componentWillReceiveProps(props) {
        console.log('CHARTS componentWillReceiveProps');
        this.state.type = props.type;
        this.state.options = props.options;
        this.state.data = props.data;
    }

    render() {
        return (
            <div>
                {(() => {                    
                    if(this.state.isChart === "LINE") {
                        return (
                            <LineCharts
                                type={ this.state.type }
                                options={ this.state.options }
                                data={ this.state.data }/>        
                        );
                    } else {
                        return (
                            <div />
                        );
                    }
                })()}
            </div>
        );
    };
};

export default connect()(withRouter(Charts));
