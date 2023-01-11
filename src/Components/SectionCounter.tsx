import React from 'react';
import axios from 'axios';
import { Row, Col, Container } from 'react-bootstrap';
interface ColCountProps {
    colText: string;
}
interface colCountState {
    colNumber: number;
}
interface AxiosResponse {
    randomNumber: number;
}
export default class SectionCounter extends React.Component {
    public render() {
        return (
            <section id="counter-section">
                <Container fluid >
                    <Row>
                        <ColCount
                            colText={"HAPPY CLIENTS"}
                        />
                        <ColCount
                            colText={"TELEPHONIC TALK"}
                        />
                        <ColCount
                            colText={"PHOTO CAPTURE"}
                        />
                        <ColCount
                            colText={"PROJECT"}
                        />
                    </Row>
                </Container>
            </section>

        );
    }
}
class ColCount extends React.Component<ColCountProps, colCountState> {
    state: colCountState = { colNumber: 0 };
    constructor(props: ColCountProps) {
        super(props);
        setInterval(() => {
            axios.get<AxiosResponse[]>("http://www.randomnumberapi.com/api/v1.0/random?", {
                params: {
                    min: 0,
                    max: 500
                }
            }).then((response) => {
                this.setState(prevState => {
                    let local: any = prevState;
                    return { ...local, colNumber: response.data[0] }
                });
            })
        }, 5000);
    }
    componentDidMount(): void {
        axios.get<AxiosResponse[]>("http://www.randomnumberapi.com/api/v1.0/random?", {
            params: {
                min: 0,
                max: 500
            }
        }).then((response) => {

            this.setState(prevState => {
                let local: any = prevState;
                return { ...local, colNumber: response.data[0] }
            });
        })
    }
    public render() {
        return (
            <Col sm={6} md={3}>
                <h6 className="text-center">{this.props.colText}</h6>
                <h2 className="text-center fw-bold">{this.state.colNumber}</h2>
            </Col>
        );
    }
}