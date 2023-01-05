export default class SectionCounter {
    public getSectionCounterContent() {
        return (
            <section id="section-counter">
                <div className="container-fluid">
                    <div className="row row-1">
                        <div className="col-sm-6 col-md-3">
                            <h6 className="text-center">HAPPY CLIENTS</h6>
                            <h2 className="text-center fw-bold">{Math.round(Math.random() * 500)}</h2>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <h6 className="text-center">TELEPHONIC TALK</h6>
                            <h2 className="text-center fw-bold">{Math.round(Math.random() * 500)}</h2>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <h6 className="text-center">PHOTO CAPTURE</h6>
                            <h2 className="text-center fw-bold">{Math.round(Math.random() * 500)}</h2>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <h6 className="text-center">PROJECT</h6>
                            <h2 className="text-center fw-bold">{Math.round(Math.random() * 500)}</h2>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}