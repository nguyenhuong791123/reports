import React, { Component as C } from 'react';

import '../css/Footer.css';

class Footer extends C {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <span>
                    { this.props.copyright }
                </span>
            </div>
        );
    };
}

export default Footer;
