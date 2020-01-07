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

        this._onChecked = this._onChecked.bind(this);

        this.state = {
            isUser: this.props.isUser
            ,items: this.props.items
            ,options: null
            ,checked: []
            // ,types: null
        }
    };

    _loadDatas() {
        this.state.items['type'] = CHART_TYPE.BAR
        this.state.items['options'] = {
            title: "年間契約総計",
            // hAxis: { title: "", viewWindow: { min: 0, max: 15 } },
            vAxis: { title: "件数", viewWindow: { min: 0, max: 15 } },
            legend: "none"
        };
        this.state.items['data'] = [
            { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 }
            ,{ name: 'Page B', uv: 3000, pv: 1398, amt: 2210 }
            ,{ name: 'Page C', uv: 2000, pv: 9800, amt: 2290 }
            ,{ name: 'Page D', uv: 2780, pv: 3908, amt: 2000 }
            ,{ name: 'Page E', uv: 1890, pv: 4800, amt: 2181 }
            ,{ name: 'Page F', uv: 2390, pv: 3800, amt: 2500 }
            ,{ name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
          ];

        this.state.options = this._chartOptions();
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

    _onChecked(e) {
        const dIdx = Array.from(this.state.checked).indexOf(e.target.value);
        if(e.target.checked !== true) {
            console.log(dIdx)
            if(dIdx > 0)
                this.state.checked.splice(dIdx);
        } else {
            if(dIdx <= 0)
                this.state.checked.push(e.target.value);
            this.state.items.type = e.target.value;    
        }
        console.log(this.state.checked)
        this.forceUpdate();
    }

    componentDidMount() {
        this.props.isLoading(false);
    }

    render() {
        this._loadDatas();
        return (
            <div>
                <Tables items={ this.state.items } />
                <Select options={ this.state.options } />
                <Charts data={ this.state.items.data } options={ this.state.items.options } />     
            </div>
        )
    };
};

export default connect()(withRouter(Reports));