import axios from 'axios';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
interface ColCountProps {
    colNumber: number;
    colText: string;
}
interface sCStateType {
    numberArray:number[],
}
export default class SectionCounter extends React.Component<{},number[]> {
    public constructor(props:any) {
        super(props);
        this.state = [0,0,0,0];
    }
    public componentDidMount(): void {
        console.log("Section counter is re-render");
        axios.get<string>("https://www.random.org/integers/?", {
            params: {
                min: 1,
                max: 200,
                num: 4,
                col: 4,
                format: "plain",
                rnd: "new",
                base: "10",
            }
        }).then((response) => {
            let regex = new RegExp(/\d{1,3}/g);
            if (regex.test(response.data)) {
                let randomNumber: number[] | undefined = response.data.match(regex)?.map(item => Number(item));
                if (typeof randomNumber === "undefined") return;
                this.setState(randomNumber);
            }
        })
    }
    public render() {
        return (
            <section id="counter-section">
                <Container fluid >
                    <Row>
                        <ColCount
                            colText={"HAPPY CLIENTS"}
                            colNumber={this.state[0]}
                        />
                        <ColCount
                            colText={"TELEPHONIC TALK"}
                            colNumber={this.state[1]}
                        />
                        <ColCount
                            colText={"PHOTO CAPTURE"}
                            colNumber={this.state[2]}
                        />
                        <ColCount
                            colText={"PROJECT"}
                            colNumber={this.state[3]}
                        />
                    </Row>
                </Container>
            </section>

        );
    }
}
class ColCount extends React.Component<ColCountProps> {
    public render() {
        return (
            <Col sm={6} md={3}>
                <h6 className="text-center">{this.props.colText}</h6>
                <h2 className="text-center fw-bold">{this.props.colNumber}</h2>
            </Col>
        );
    }
}