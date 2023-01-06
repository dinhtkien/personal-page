export default class LastestNews {
    public getLastestNewContents() {
        return (
            <section id='lastestnews-section'>
                <div className='container-fluid'>
                    <div className="card">
                        <h2>Latest News</h2>
                        <p>I design and develop services for customers of all sizes,
                            specializing in creating stylish, modern websites, web services and online stores.
                            My passion is to design digital user experiences through the bold interface.</p>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-4">
                            <div className="card">
                                <img src="images/lastestnews-1.jpg" className="" alt="n1"></img>
                                <p>By John Doe 03.02.2018</p>
                                <h6>News 1</h6>
                                <p>
                                    Maecenas vitae justo non mauris accumsan varius.
                                    Suspendisse eu felis ut risus pharetra egestas id vitae purus.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="card">
                                <img src="images/lastestnews-2.jpg" className="" alt="n2"></img>
                                <p>By John Doe 03.02.2018</p>
                                <h6>News 2</h6>
                                <p>
                                    Maecenas vitae justo non mauris accumsan varius.
                                    Suspendisse eu felis ut risus pharetra egestas id vitae purus.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="card">
                                <img src="images/lastestnews-3.jpg" className="" alt="n3"></img>
                                <p>By John Doe 03.02.2018</p>
                                <h6>News 3</h6>
                                <p>
                                    Maecenas vitae justo non mauris accumsan varius.
                                    Suspendisse eu felis ut risus pharetra egestas id vitae purus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        );
    }
}