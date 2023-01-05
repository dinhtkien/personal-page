export default class DetailedAboutme {

    public getDetailedAboutMeContent() {
        return (
            <section id="detailed-about-me">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <h4>Hi, my name is Dinh Trung Kien</h4>
                                <h5>I'm Embedded/Automotive Software Developer At Bosch</h5>
                                <p>I'm developing firmware for Airbag ECU in Automobile Vehicles. Customer are chinese company and factory.
                                    My desired job is a creative job, without any hard standard. Check out for my <a href="#navbarid">Portfolio</a>
                                </p>
                                <button className="cust-button"><span>Contact Me</span></button>
                            </div>
                        </div>
                        <div className="col-sm-6">
                        <img className="kien-image w-100" src="images/kien-daboutme.jpg" alt="kien"></img>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}