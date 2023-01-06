export default class Portfolio {
    public getPortfolioContents() {
        return (
            <section id='portfolio-section'>
                <div className='container-fluid'>
                    <div className="card">
                        <h4>Our Portfolio</h4>
                        <p>
                            I design and develop services for customers of all sizes, specializing in creating stylish,
                            modern websites, web services and online stores. My passion is to design digital user
                            experiences through the bold interface.
                        </p>
                    </div>
                    <div className="row button-row">
                        <button className="btn btn-sm">ALL</button>
                        <button className="btn btn-sm">PHOTOSHOPS</button>
                        <button className="btn btn-sm">WEBSITE</button>
                        <button className="btn btn-sm">MOBILE APPS</button>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-4">
                            <div className="card">
                                <img src="images/portfolio-1.jpg" alt="p1"></img>
                                <h6>Kien's Portfolio</h6>
                                <p>
                                    Maecenas vitae justo non mauris accumsan varius.
                                    Suspendisse eu felis ut risus pharetra egestas id vitae purus.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="card">
                                <img src="images/portfolio-2.jpg" alt="p1"></img>
                                <h6>Kien's Portfolio</h6>
                                <p>
                                    Maecenas vitae justo non mauris accumsan varius.
                                    Suspendisse eu felis ut risus pharetra egestas id vitae purus.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="card">
                                <img src="images/portfolio-3.jpg" alt="p1"></img>
                                <h6>Kien's Portfolio</h6>
                                <p>
                                    Maecenas vitae justo non mauris accumsan varius.
                                    Suspendisse eu felis ut risus pharetra egestas id vitae purus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-4">
                            <div className="card">
                                <img src="images/portfolio-4.jpg" alt="p1"></img>
                                <h6>Kien's Portfolio</h6>
                                <p>
                                    Maecenas vitae justo non mauris accumsan varius.
                                    Suspendisse eu felis ut risus pharetra egestas id vitae purus.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="card">
                                <img src="images/portfolio-5.jpg" alt="p1"></img>
                                <h6>Kien's Portfolio</h6>
                                <p>
                                    Maecenas vitae justo non mauris accumsan varius.
                                    Suspendisse eu felis ut risus pharetra egestas id vitae purus.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="card">
                                <img src="images/portfolio-6.jpg" alt="p1"></img>
                                <h6>Kien's Portfolio</h6>
                                <p>
                                    Maecenas vitae justo non mauris accumsan varius.
                                    Suspendisse eu felis ut risus pharetra egestas id vitae purus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}