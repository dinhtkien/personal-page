import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
export default class AboutMe extends React.Component {

    public render() {
        return (
            <section id="aboutme-section">
                <Container fluid>
                    <Row>
                        <Col sm={6}>
                            <Card>
                                <h3 className="text-light">Hello, my name is</h3>
                                <h1 className="text-light">Kien</h1>
                                <p className="text-light">An Software Developer at Bosch Global Software VietNam</p>
                                <a href="files/kien-cv.pdf" className="">Download My Résume</a>
                            </Card>
                        </Col>
                        <Col sm={6}>
                            <img className="kien-image" src="images/kien-aboutme.jpg" alt="kien"></img>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}