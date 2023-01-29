import axios from "axios";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

interface ServicesProps {
    unusedText: string;
}
interface ServicesState {
    myServiceText: string[],
    isMyCardReady: boolean,
}
interface myServiceCardProps {
    iClassname: string,
    h5Text: string,
    pText: string,
}
class MyServiceCard extends React.Component<myServiceCardProps> {
    public render() {
        return (
            <Col sm={6} md={4}>
                <Card>
                    <i className={this.props.iClassname}></i>
                    <h5>{this.props.h5Text}</h5>
                    <p>{this.props.pText}</p>
                </Card>
            </Col>
        );
    }
}
export default class Services extends React.Component<{},string[]> {
    public constructor(props:any) {
        super(props);
        this.state = ["", "", "", "", "", ""];
    }
    componentDidMount(): void {
        axios.get("https://baconipsum.com/api/?type=meat-and-filler", {
            params: {
                type: "meat-and-filler",
                paras: 6,
            }
        })
            .then((response) => {
                this.setState(response.data);
            })
    }
    
    public render() {
        return (
            <section id="service-section">
                <Container fluid>
                    <h1 className="text-center">My Services</h1>
                    <p className="text-center fs-6">
                    </p>
                    <Row>
                        <MyServiceCard
                            h5Text={"Development"}
                            iClassname={"fa-brands fa-connectdevelop"}
                            pText={this.state[0]}
                        />
                        <MyServiceCard
                            h5Text={"Graphic"}
                            iClassname={"fa-solid fa-image"}
                            pText={this.state[1]}
                        />
                        <MyServiceCard
                            h5Text={"Web Design"}
                            iClassname={"fa-solid fa-pen-clip"}
                            pText={this.state[2]}
                        />
                    </Row>
                    <Row>
                        <MyServiceCard
                            h5Text={"Photography"}
                            iClassname={"fa-solid fa-photo-film"}
                            pText={this.state[3]}
                        />
                        <MyServiceCard
                            h5Text={"Optimization"}
                            iClassname={"fa-solid fa-diagram-predecessor"}
                            pText={this.state[4]}
                        />
                        <MyServiceCard
                            h5Text={"Mobile"}
                            iClassname={"fa-solid fa-mobile"}
                            pText={this.state[5]}
                        />
                    </Row>
                </Container>
            </section>
        );
    }
}