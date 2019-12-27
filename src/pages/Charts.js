import React, { Component as C } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { Chart } from "react-google-charts";

class Charts extends C {
    constructor(props) {
        super(props);

        this.state = {
            isUser: this.props.isUser
            ,items: this.props.items
        }
    };

    _delLastIndex() {
        const dl = this.state.items.data.length;
        this.state.items.data.splice([dl-1])
        this.state.items.data.map((obj) => {
            const ol = obj.length;
            if(dl > 0) {
                obj.splice([ol-1])
            }
            return obj
        });
    }

    // componentDidMount() {
    //     this.props.isLoading(false);
    // }

    render() {
        this._delLastIndex();
        return (
            <Chart
                chartType={ this.state.items.type }
                data={ this.state.items.data }
                options={ this.state.items.options }
                legendToggle />
        )
    };
};

export default connect()(withRouter(Charts));
