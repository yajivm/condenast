import React, { Component, Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';

//import images
import logo from '../../assets/img/logo.png'

export default class Header extends Component {
    
    render() {
        return(
            <div className="header-wrapper">
                <Row className="m-0 header-wrapper--inner">
                    <Col>
                        <img
                            src={logo}
                            alt="condenast"
                            title="CondeNast"
                            className="img-fluid logo"
                        />
                        <h1>Data Status</h1>
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
            </div>
        )
    }
}