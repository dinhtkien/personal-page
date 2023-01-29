import { Button, Card, Col, Row } from "react-bootstrap"

export default class Portfolio {
    public getPortfolioContents() {
        return (
            <section id='portfolio-section'>
                <div className='container-fluid'>
                    <Card>
                        <h4>Our Portfolio</h4>
                        <p>
                            I design and develop services for customers of all sizes, specializing in creating stylish,
                            modern websites, web services and online stores. My passion is to design digital user
                            experiences through the bold interface.
                        </p>
                    </Card>
                    <Row className="button-row">
                        <Button size="sm">
                            ALL
                        </Button>
                        <Button size="sm">
                            PHOTOSHOPS
                        </Button>
                        <Button size="sm">
                            WEBSITE
                        </Button>
                        <Button size="sm">
                            MOBILE APPS
                        </Button>
                    </Row>
                    <Row>
                        <Col sm={6} md={4}>
                            <Card>
                                <img src="images/portfolio-1.jpg" alt="p1"></img>
                                <h6>Kien's Portfolio</h6>
                                <p>
                                    Maecenas vitae justo non mauris accumsan varius.
                                    Suspendisse eu felis ut risus pharetra egestas id vitae purus.
                                </p>
                            </Card>
                        </Col>
                        <Col sm={6} md={4}>
                            <Card>
                                <img src="images/portfolio-2.jpg" alt="p2"></img>
                                <h6>Kien's Portfolio</h6>
                                <p>
                                    Maecenas vitae justo non mauris accumsan varius.
                                    Suspendisse eu felis ut risus pharetra egestas id vitae purus.
                                </p>
                            </Card>
                        </Col>
                        <Col sm={6} md={4}>
                            <Card>
                                <img src="images/portfolio-3.jpg" alt="p3"></img>
                                <h6>Kien's Portfolio</h6>
                                <p>
                                    Maecenas vitae justo non mauris accumsan varius.
                                    Suspendisse eu felis ut risus pharetra egestas id vitae purus.
                                </p>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} md={4}>
                            <Card>
                                <img src="images/portfolio-4.jpg" alt="p4"></img>
                                <h6>Kien's Portfolio</h6>
                                <p>
                                    Maecenas vitae justo non mauris accumsan varius.
                                    Suspendisse eu felis ut risus pharetra egestas id vitae purus.
                                </p>
                            </Card>
                        </Col>
                        <Col sm={6} md={4}>
                            <Card>
                                <img src="images/portfolio-5.jpg" alt="p5"></img>
                                <h6>Kien's Portfolio</h6>
                                <p>
                                    Maecenas vitae justo non mauris accumsan varius.
                                    Suspendisse eu felis ut risus pharetra egestas id vitae purus.
                                </p>
                            </Card>
                        </Col>
                        <Col sm={6} md={4}>
                            <Card>
                                <img src="images/portfolio-6.jpg" alt="p6"></img>
                                <h6>Kien's Portfolio</h6>
                                <p>
                                    Maecenas vitae justo non mauris accumsan varius.
                                    Suspendisse eu felis ut risus pharetra egestas id vitae purus.
                                </p>
                            </Card>
                        </Col>
                    </Row>

            </div>
            </section >
        );
    }
}