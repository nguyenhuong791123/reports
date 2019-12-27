import React, { Component as C } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';

class Tables extends C {
    constructor(props) {
        super(props);

        this.state = {
            isUser: this.props.isUser
            ,items: this.props.items
        }
    };

    // componentDidMount() {
    //     this.props.isLoading(false);
    // }

    render() {
        return (
            <Table striped bordered hover>
                {(() => {
                    var ths = []
                    const datas = this.state.items.data;
                    for (let i=0; i<datas.length; i++) {
                        const objs = datas[i];
                        for (let o=0; o<objs.length; o++) {
                            if(o === 0)
                                ths.push(<th key={i}>{ objs[o] }</th>);
                                break
                        }
                    }
                    return(<thead><tr>{ ths }</tr></thead>);
                })()}

                {(() => {
                    const datas = this.state.items.data;
                    var trs = []
                    let dl = datas[0].length;
                    for (let i=1; i<dl; i++) {
                        var tds = []
                        tds.push(<td key={i}>{ datas[0][i] }</td>);
                        for (let o=0; o<datas.length; o++) {
                            const objs = datas[o];
                            if(o === 0)
                                continue
                            tds.push(<td key={i + '_' + o}>{ objs[i] }</td>);
                        }
                        trs.push(<tr key={ 'tr_' + i}>{ tds }</tr>);
                    }
                    return(<tbody>{ trs }</tbody>);
                })()}
            </Table>
        )
    };
};

export default connect()(withRouter(Tables));
