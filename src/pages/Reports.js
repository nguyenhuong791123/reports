import React, { Component as C } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import Select from 'react-select';
// import Form from 'react-bootstrap/Form';

import { CHART_TYPE } from '../utils/Types';
import Tables from './Tables';
import Charts from './Charts';

class Reports extends C {
    constructor(props) {
        super(props);

        this._onChanged = this._onChanged.bind(this);

        this.state = {
            isUser: this.props.isUser
            ,options: this._chartOptions()
            ,defaultValue: null //{ label: CHART_TYPE.LINE[0], value: CHART_TYPE.LINE[0] }
            ,selected: [ ] //CHART_TYPE.LINE[0]
            ,items: { options: null, data: null }
        }
    };

    _loadDatas() {
        this.state.items.options = {
            width: 700
            ,height: 450
            ,margin: { top: 30, right: 30, left: 30, bottom: 20 }
        };
        this.state.items.data = [
            { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 }
            ,{ name: 'Page B', uv: -3000, pv: 1398, amt: 2210 }
            ,{ name: 'Page C', uv: 2000, pv: 9800, amt: 2290 }
            ,{ name: 'Page D', uv: 2780, pv: 3908, amt: 2000 }
            ,{ name: 'Page E', uv: -1890, pv: 4800, amt: 2181 }
            ,{ name: 'Page F', uv: 2390, pv: 3800, amt: 2500 }
            ,{ name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
            // { name: '2000-01', uv: 4000, pv: 2400, amt: 2400, },
            // { name: '2000-02', uv: -3000, pv: 1398, amt: 2210, },
            // { name: '2000-03', uv: 2000, pv: 9800, amt: 2290, },
            // { name: '2000-04', uv: -2780, pv: 3908, amt: 2000, },
            // { name: '2000-05', uv: 1890, pv: 4800, amt: 2181, },
            // { name: '2000-06', uv: 2390, pv: 3800, amt: 2500, },
            // { name: '2000-07', uv: -3490, pv: 4300, amt: 2100, },
            // { name: '2000-08', uv: 4000, pv: 2400, amt: 2400, },
            // { name: '2000-09', uv: 3000, pv: 1398, amt: 2210, },
            // { name: '2000-10', uv: 2000, pv: 9800, amt: 2290, },
            // { name: '2000-11', uv: 2780, pv: 3908, amt: 2000, },
            // { name: '2000-12', uv: 1890, pv: 4800, amt: 2181, },
        ];
    }

    _chartOptions() {
        const keys = Object.keys(CHART_TYPE);
        return keys.map((key) => {
            return {
                label: key
                ,options: CHART_TYPE[key].map((o) => {
                        return { label: o, value: o }
                    }) 
                }
        });
    }

    _onChanged(e) {
        if (e === null) {
            this.state.selected = [];
        } else {
            this.state.selected = e.map((s) => { return s.value });
        }
        this.forceUpdate();
    }

    componentDidMount() {
        this.props.isLoading(false);
    }

    render() {
        this._loadDatas();
        return (
            <div>
                <Select isMulti options={ this.state.options } onChange={ this._onChanged.bind(this) } defaultValue={ this.state.defaultValue } placeholder={ "Please Select Chart Types!!!" } />
                <Charts type={ this.state.selected } options={ this.state.items.options } data={ this.state.items.data } />     
                <Tables items={ this.state.items } />
            </div>
        )
    };
};

export default connect()(withRouter(Reports));