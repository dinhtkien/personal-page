import axios from "axios";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

interface ServicesProps {
    unusedText: string;
}
interface ServicesState {
    myServiceText: string,
    isMyCardReady: boolean,
}
interface myServiceCardProps {
    iClassname: string,
    h5Text: string,
}
interface myServiceCardState {
    pText: string,
}
class MyServiceCard extends React.Component<myServiceCardProps, myServiceCardState> {
    state: myServiceCardState = { pText: "" };
    componentDidMount(): void {
        axios.get("https://baconipsum.com/api/?type=meat-and-filler", {
            params: {
                type: "meat-and-filler",
                paras: 1,
            }
        })
            .then((response) => {
                this.setState(prevState => {
                    return ({
                        ...prevState,
                        pText: response.data,
                    })
                })
            })
    }
    public render() {
        return (
            <Col sm={6} md={4}>
                <Card>
                    <i className={this.props.iClassname}></i>
                    <h5>{this.props.h5Text}</h5>
                    <p>{this.state.pText}</p>
                </Card>
            </Col>
        );
    }

}
export default class Services extends React.Component<ServicesProps, ServicesState> {
    state: ServicesState = { myServiceText: "", isMyCardReady:false };
    private _cardContentJSX:JSX.Element[] | undefined;
    componentDidMount(): void {
        axios.get("https://baconipsum.com/api/?type=meat-and-filler", {
            params: {
                type: "meat-and-filler",
                paras: 1,
            }
        })
            .then((response) => {
                this.setState(prevState => {
                    return ({
                        ...prevState,
                        myServiceText: response.data,
                    })
                })
            })
        let cardContents: myServiceCardProps[] = [
            { h5Text: "Development", iClassname: "fa-brands fa-connectdevelop" },
            { h5Text: "Graphic", iClassname: "fa-solid fa-image" },
            { h5Text: "Web Design", iClassname: "fa-solid fa-pen-clip" },
            { h5Text: "Photography", iClassname: "fa-solid fa-photo-film" },
            { h5Text: "Optimization", iClassname: "fa-solid fa-diagram-predecessor" },
            { h5Text: "Mobile", iClassname: "fa-solid fa-mobile" }];
        this._cardContentJSX = cardContents.map(cardContent => {
            return (
                <MyServiceCard
                    h5Text={cardContent.h5Text}
                    iClassname={cardContent.iClassname}
                />
            );
        })
    }
    public render() {
        return (
            <section id="service-section">
                <Container fluid>
                    <h1 className="text-center">My Services</h1>
                    <p className="text-center fs-6">
                        {this.state.myServiceText}
                    </p>
                    <Row>
                        {this._cardContentJSX}
                    </Row>
                </Container>
            </section>
        );
    }
}