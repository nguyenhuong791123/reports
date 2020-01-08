import React, { Component as C } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';

class Tables extends C {
    constructor(props) {
        super(props);

        this.state = { items: this.props.items }
    };

    render() {
        const headers = Object.keys(this.state.items.data[0]);
        const datas = this.state.items.data;
        return (
            <Table striped bordered hover>
                {(() => {
                    var ths = headers.map((o, idx) => {
                        if (idx === 0) {
                            return (<th key={idx}>#</th>);
                        } else {
                            return (<th key={idx}>{ o }</th>);
                        }
                    })
                    return(<thead><tr>{ ths }</tr></thead>);
                })()}

                {(() => {
                    var trs = datas.map((o, idx) => {
                        var tds = headers.map((k, i) => {
                            return (<td key={ i }>{ o[k] }</td>);
                        });
                        return (<tr key={ 'tr_' + idx }>{ tds }</tr>);
                    });
                    return(<tbody>{ trs }</tbody>);
                })()}
            </Table>
        )
    };
};

export default connect()(withRouter(Tables));
