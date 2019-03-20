import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

//import component
import Header from '../../components/Header';
import AnalyticComponent from '../../components/analyticComponent';

//import example data
import sampleData from '../../components/exampleDataComponent';

export default class Home extends Component {

    state = {
        userEngagement: sampleData.userEngagement(),
        adDelivery: sampleData.adDelivery(),
        consumerMarketing: sampleData.consumerMarketing()
    }
    
    componentDidMount() {
        console.log(sampleData.userEngagement, "userEngagement")
    }

    render() {
        return (            
            <div className="page-content-innner-wrapper m-0">
                <div className="container--wrap p-0">
                    <Header />
                    <main className="py-3 px-4">
                        <Row className="m-0">
                            <Col>
                                <div className="card-block-wrapper">
                                    <div className="card-title">
                                        <h4>User Engagement</h4>
                                    </div>
                                    <div className="card-body p-0">
                                        <AnalyticComponent 
                                            analyticData = {this.state.userEngagement}
                                        />                
                                    </div>
                                </div>
                            </Col>                
                            <Col>
                                <div className="card-block-wrapper">
                                    <div className="card-title">
                                        <h4>Ad Delivery</h4>
                                    </div>
                                    <div className="card-body p-0">
                                        <AnalyticComponent 
                                            analyticData = {this.state.adDelivery}
                                        />                
                                    </div>
                                </div>
                            </Col>                
                            <Col>
                                <div className="card-block-wrapper">
                                    <div className="card-title">
                                        <h4>Customer Marketing</h4>
                                    </div>
                                    <div className="card-body p-0">
                                        <AnalyticComponent 
                                            analyticData = {this.state.consumerMarketing}
                                        />                
                                    </div>
                                </div>
                            </Col>                   
                        </Row>
                    </main>
                </div>
            </div>
        );
    }
}