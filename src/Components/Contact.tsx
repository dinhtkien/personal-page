export default class Contact {
    getContactContents() {
        return (
            <section id='contact-section'>
                <div className='container-fluid'>
                    <div className="card static-card">
                        <h2>Contact Us</h2>
                        <p>I design and develop services for customers of all sizes, specializing in creating stylish,
                            modern websites, web services and online stores. My passion is to design digital user
                            experiences through the bold interface.
                        </p>
                    </div>
                    <div className="card float-card">
                        <div className="row">
                            <div className="col-sm-6">
                                <h4>Get In Touch</h4>
                                <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam,
                                </p>
                                <div className="personal-infor">
                                    <i className="fa-solid fa-address-book"></i>
                                    <p className="">Binh Tan District, Ho Chi Minh City</p>
                                </div>
                                <div className="personal-infor">
                                    <i className="fa-solid fa-envelope"></i>
                                    <p className="">dinhtkien@gmail.com<br></br>dinhtkienfj@gmail.com</p>
                                </div>
                                <div className="personal-infor">
                                    <i className="fa-solid fa-phone"></i>
                                    <p className=""> +84 8699 6250</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <h4>Say Something</h4>
                                <input className="form-control" type="text" placeholder="Name"></input>
                                <input className="form-control" type="text" placeholder="Phone"></input>
                                <input className="form-control" type="text" placeholder="Email"></input>
                                <input className="form-control" type="text" placeholder="Subject"></input>
                                <textarea className="form-control" placeholder="Comment"></textarea>
                                <button className="cust-button"><span>Send</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}