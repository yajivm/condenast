import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

//import images
import logo from '../../assets/img/logo.png';

//import moment
import Moment from 'moment';

export default class Header extends Component {
    
    render() {
        return(
            <div className="header">
                <div className="header-wrapper box-shadow ">
                    <Row className="m-0 header-wrapper--inner py-3">
                        <Col>
                            <img
                                src={logo}
                                alt="condenast"
                                title="CondeNast"
                                className="img-fluid logo"
                            />
                            <h2 className="text-white">Data Status</h2>
                        </Col>
                        <Col>
                            <div className="d-flex justify-content-center align-items-center time-wrapper">
                                <div className="w-100">
                                    <div className="grey-bg">
                                        <span>UPDATED</span>
                                        <span className="time-span">{Moment(this.props.time).format("DD/MM/DD h:mm")}</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="bandge-wrapper">
                                <div className="">
                                    <span className="round-badge round-badge--green"></span>
                                    <span className="badge-text">Complete</span>
                                </div>
                                <div className="">
                                    <span className="round-badge round-badge--yellow"></span>
                                    <span className="badge-text">Quality Alert</span>
                                </div>
                                <div className="">
                                    <span className="round-badge round-badge--orange"></span>
                                    <span className="badge-text">Partial Load</span>
                                </div>
                                <div className="">
                                    <span className="round-badge round-badge--red"></span>
                                    <span className="badge-text">No Load</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}