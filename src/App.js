import React, { Component as C } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { sessionService, sessionReducer } from 'redux-react-session';
import { createBrowserHistory } from 'history';
import LoadingOverlay from 'react-loading-overlay';

import { ACTION } from './utils/Types';
import Reports from './pages/Reports';
// import Tables from './pages/Tables';
// import Charts from './pages/Charts';
import Footer from './pages/Footer';

import './css/bootstrap.min.css';
import './css/Index.css';

let reducer = combineReducers({ session: sessionReducer });
let store = createStore(reducer, compose(applyMiddleware(thunkMiddleware)));
sessionService.initSessionService(store, { driver: 'COOKIES' });
const history = createBrowserHistory();

class App extends C {
    constructor(props) {
        super(props);

        this._isLoading = this._isLoading.bind(this);
        // this._loadDatas = this._loadDatas.bind(this);

        this.state = {
            loading: true
            ,copyright: 'Copyright ©2018 VNEXT All Rights Reserved.'
            ,isUser: null
            ,items: {}
        }
    }

    _isLoading(loading) {
        this.state.loading = loading
        this.forceUpdate();
    }

    // _loadDatas() {
    //     this.state.items['type'] = CHART_TYPE.BAR
    //     this.state.items['options'] = {
    //         title: "年間契約総計",
    //         // hAxis: { title: "", viewWindow: { min: 0, max: 15 } },
    //         vAxis: { title: "件数", viewWindow: { min: 0, max: 15 } },
    //         legend: "none"
    //     };
    //     this.state.items['data'] = [
    //         ["", "契約件数", "契約継続件数", "総計"],
    //         ["1月", 5, 7, 12],
    //         ["2月", 2, 3, 5],
    //         ["3月", 7, 7, 14],
    //         ["4月", 3, 2, 5],
    //         ["5月", 1, 2, 3],
    //         ["6月", 3, 4, 7],
    //         ["7月", 4, 3, 7],
    //         ["8月", 7, 10, 17],
    //         ["9月", 4, 5, 9],
    //         ["10月", 4, 4, 8],
    //         ["11月", 3, 4, 7],
    //         ["12月", 10, 5, 15],
    //         ["合計", 53, 56, 119]
    //     ];
    // }

    render() {
        console.log('APP Render !!!');
        // this._loadDatas();
        return (
            <div>
                <LoadingOverlay active={ this.state.loading } spinner text='Loading your content...' />

                <Provider store={ store }>
                    <Router history={ history }>
                        {/* <div id='div_header'>
                            <Header isUser={ this.state.isUser } headers={ this.state['headers'] }/>
                        </div> */}
                        <div id='div_body'>
                            <Switch>
                                <Route
                                    exact path={ ACTION.SLASH }
                                    render={ ({ props }) => <Reports
                                                                isUser={ this.state.isUser }
                                                                items={ this.state.items }
                                                                isLoading={ this._isLoading.bind(this) }
                                                                {...this.props} />} />

                                {/* <Route
                                    exact path={  ACTION.SLASH + ACTION.TABLES }
                                    render={ ({ props }) => <Tables
                                                                isUser={ this.state.isUser }
                                                                items={ this.state.items }
                                                                isLoading={ this._isLoading.bind(this) }
                                                                {...this.props} />} />

                                <Route
                                    path={ ACTION.SLASH + ACTION.CHARTS }
                                    render={ ({ props }) => <Charts
                                                                isUser={ this.state.isUser }
                                                                items={ this.state.items }
                                                                isLoading={ this._isLoading.bind(this) }
                                                                {...this.props} />} /> */}
                            </Switch>
                        </div>
                    </Router>
                </Provider>

                <div id='div_footer' className='bg-light div-footer'>
                    <Footer copyright={ this.state.copyright } />
                </div>
            </div>
        );
    };
}

export default App;
