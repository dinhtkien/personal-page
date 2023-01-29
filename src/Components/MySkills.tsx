import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
interface SkillbarProps {
    skillName: string,
    skillBarValue: number,
}
class SkillBar extends React.Component<SkillbarProps> {

    componentWillMount(): void {
    }
    render() {
        return (
            <>
                <h6><span>{this.props.skillName}</span> <span className='text-secondary fs-6'>{this.props.skillBarValue}</span></h6>
                <ProgressBar now={this.props.skillBarValue} />
            </>
        );
    }
}
interface MySkillStateType {
    randomNumber: number[] | undefined,
    mySkillText: string,
}
export default class MySkills extends React.Component<{}, MySkillStateType> {
    public constructor(props: any) {
        super(props);
        this.state = {
            randomNumber: [0, 0, 0, 0, 0, 0, 0],
            mySkillText: "",
        };
    }
    public componentDidMount(): void {
        axios.get<string>("https://www.random.org/integers/?", {
            params: {
                min: 30,
                max: 100,
                num: 6,
                col: 6,
                format: "plain",
                rnd: "new",
                base: "10",
            }
        }).then((response) => {
            let regex = new RegExp(/\d{1,3}/g);
            if (regex.test(response.data)) {
                let randomNumber: number[] | undefined = response.data.match(regex)?.map(item => Number(item));
                if (typeof randomNumber === "undefined") return;
                this.setState(prev => { return ({ ...prev, randomNumber: randomNumber }) });
            }
        })
        axios.get("https://baconipsum.com/api/?type=meat-and-filler", {
            params: {
                type: "meat-and-filler",
                paras: 1,
            }
        })
            .then((response) => {
                this.setState(prev => { return ({ ...prev, mySkillText: response.data }) });
            });
    }
    public render() {
        if (typeof this.state.randomNumber === 'undefined') return;
        return (
            <section id='myskill-section'>
                <Container fluid>
                    <Row>
                        <Col sm={6}>
                            <h4>Make beauty Things With Passion.</h4>
                            <p>{this.state.mySkillText}</p>
                        </Col>
                        <Col sm={6}>
                            <SkillBar
                                skillName="HTML"
                                skillBarValue={this.state.randomNumber[0]}
                            />
                            <SkillBar
                                skillName="CSS/SCSS"
                                skillBarValue={this.state.randomNumber[1]}
                            />
                            <SkillBar
                                skillName="Javascript"
                                skillBarValue={this.state.randomNumber[2]}
                            />
                            <SkillBar
                                skillName="Typescript"
                                skillBarValue={this.state.randomNumber[3]}
                            />
                            <SkillBar
                                skillName="React"
                                skillBarValue={this.state.randomNumber[4]}
                            />
                            <SkillBar
                                skillName="BootStrap"
                                skillBarValue={this.state.randomNumber[5]}
                            />
                        </Col>
                    </Row>
                </Container>
            </section >
        );
    }
}