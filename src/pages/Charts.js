import React, { Component as C } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';

class Charts extends C {
    constructor(props) {
        super(props);

        this.state = {
            isUser: this.props.isUser
        }
    };

    componentDidMount() {
        this.props.isLoading(false);
    }

    render() {
        return (
            <div>
                Charts
            </div>
        )
    };
};

export default connect()(withRouter(Charts));
