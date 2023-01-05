export default class AboutMe {

    public getAbouMeContent() {
        return (
            <section id='aboutme'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <h3 className="text-light">Hello, my name is</h3>
                                <h1 className="text-light">Kien</h1>
                                <p className="text-light">An Software Developer at Bosch Global Software VietNam</p>
                                <a href="#navbarid" className="" >Download My Résume</a>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <img className="kien-image" src="images/kien-aboutme.jpg" alt="kien"></img>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}