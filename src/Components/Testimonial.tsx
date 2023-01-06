import Carousel from 'react-bootstrap/Carousel';
export default class Testimonial {
    public getTestimonialContents() {
        return (
            <section id="testimonial-section">
                <div className="container-fluid">
                    <div className="card">
                        <h3>What People Say?</h3>
                        <p>I design and develop services for customers of all sizes,
                            specializing in creating stylish, modern websites, web services and online stores.
                            My passion is to design digital user experiences through the bold interface.</p>
                    </div>
                    <Carousel>
                        <Carousel.Item>
                            <div className="card">
                                <img src="images/testimonial-av1.jpg" className='' alt="av1"></img>
                                <h5>
                                    Maecenas vitae justo non mauris accumsan varius
                                </h5>
                                <p>
                                    Maecenas vitae justo non mauris accumsan varius.
                                    Suspendisse eu felis ut risus pharetra egestas id vitae purus. Ut in posuere lectus.
                                    In a sem massa
                                </p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="card">
                                <img src="images/testimonial-av2.jpg" className='' alt="av1"></img>
                                <h5>
                                    Maecenas vitae justo non mauris accumsan varius
                                </h5>
                                <p>
                                    Maecenas vitae justo non mauris accumsan varius.
                                    Suspendisse eu felis ut risus pharetra egestas id vitae purus. Ut in posuere lectus.
                                    In a sem massa
                                </p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="card">
                                <img src="images/testimonial-av3.jpg" className='' alt="av1"></img>
                                <h5>
                                    Maecenas vitae justo non mauris accumsan varius
                                </h5>
                                <p>
                                    Maecenas vitae justo non mauris accumsan varius.
                                    Suspendisse eu felis ut risus pharetra egestas id vitae purus. Ut in posuere lectus.
                                    In a sem massa
                                </p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="card">
                                <img src="images/testimonial-av2.jpg" className='' alt="av1"></img>
                                <h5>
                                    Maecenas vitae justo non mauris accumsan varius
                                </h5>
                                <p>
                                    Maecenas vitae justo non mauris accumsan varius.
                                    Suspendisse eu felis ut risus pharetra egestas id vitae purus. Ut in posuere lectus.
                                    In a sem massa
                                </p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="card">
                                <img src="images/testimonial-av3.jpg" className='' alt="av1"></img>
                                <h5>
                                    Maecenas vitae justo non mauris accumsan varius
                                </h5>
                                <p>
                                    Maecenas vitae justo non mauris accumsan varius.
                                    Suspendisse eu felis ut risus pharetra egestas id vitae purus. Ut in posuere lectus.
                                    In a sem massa
                                </p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="card">
                                <img src="images/testimonial-av1.jpg" className='' alt="av1"></img>
                                <h5>
                                    Maecenas vitae justo non mauris accumsan varius
                                </h5>
                                <p>
                                    Maecenas vitae justo non mauris accumsan varius.
                                    Suspendisse eu felis ut risus pharetra egestas id vitae purus. Ut in posuere lectus.
                                    In a sem massa
                                </p>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
        );
    }
}