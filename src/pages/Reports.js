import React, { Component as C } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';

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
            ,checked: []
            ,types: null
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
            ["", "契約件数", "契約継続件数", "総計"],
            ["1月", 5, 7, 12],
            ["2月", 2, 3, 5],
            ["3月", 7, 7, 14],
            ["4月", 3, 2, 5],
            ["5月", 1, 2, 3],
            ["6月", 3, 4, 7],
            ["7月", 4, 3, 7],
            ["8月", 7, 10, 17],
            ["9月", 4, 5, 9],
            ["10月", 4, 4, 8],
            ["11月", 3, 4, 7],
            ["12月", 10, 5, 15],
            ["合計", 53, 56, 119]
        ];

        this.state.types = Object.keys(CHART_TYPE).map((obj) => { return obj });
    }

    _onChecked(e) {
        const dIdx = Array.from(this.state.checked).indexOf(e.target.value);
        if(e.target.checked != true) {
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
                <Tables
                    isUser={ this.state.isUser }
                    items={ this.state.items } />

                {(() => {
                    var chs = []
                    const objs = this.state.types;
                    for (let i=0; i<objs.length; i++) {
                        chs.push(<Form.Check
                                key={ i }
                                id={ i }
                                label={ objs[i] }
                                type={ 'checkbox' }
                                value={ objs[i] }
                                onChange={ this._onChecked.bind(this) }
                                custom inline />);
                    }
                    return(<div key={ 'div_chk' } className="mb-3">{ chs }</div>);
                })()}

                <Charts
                    isUser={ this.state.isUser }
                    items={ this.state.items } />            
            </div>
        )
    };
};

export default connect()(withRouter(Reports));