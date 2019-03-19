import React, { Component } from "react";
import { Row, Container } from "react-bootstrap";

//import header component
import Header from '../../components/Header';

export default class Home extends Component {

    render() {
        return (            
            <Row className="page-content-innner-wrapper m-0">
                <Container className="container--wrap p-0">
                    <Header />
                </Container>
            </Row>
        );
    }
}