import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default class DetailedAboutme extends React.Component {

    public render() {
        return (
            <section id="detailed-about-me">
                <Container fluid>
                    <Row>
                        <Col sm={6}>
                            <Card>
                                <h4>Hi, my name is Dinh Trung Kien</h4>
                                <h5>I'm Embedded/Automotive Software Developer At Bosch</h5>
                                <p>I'm developing firmware for Airbag ECU in Automobile Vehicles. Customer are chinese company and factory.
                                    My desired job is a creative job, without any hard standard. Check out for my <a href="#portfolio-section">Portfolio</a>
                                </p>
                                <button className="cust-button" onClick={event => { window.location.replace("#contact-section") }}><span>Contact Me</span></button>
                            </Card>
                        </Col>
                        <Col sm={6}>
                            <img className="kien-image w-100" src="images/kien-daboutme.jpg" alt="kien"></img>
                        </Col>
                    </Row>
                </Container>
            </section >
        );
    }
}