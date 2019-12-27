import React, { Component as C } from 'react';

import '../css/Footer.css';

class Footer extends C {
    constructor(props) {
        super(props);

        this.state = { copyright: this.props.copyright }
    }

    render() {
        return (
            <div>
                <span>
                    { this.state.copyright }
                </span>
            </div>
        );
    };
}

export default Footer;
