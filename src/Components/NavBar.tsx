/* eslint-disable jsx-a11y/anchor-is-valid */
class NavItem {
    private _name: string;
    private _hRef: string;
    public get name() {
        return this._name;
    }
    public get hRef() {
        return this._hRef;
    }
    constructor(name: string, hRef: string) {
        this._name = name;
        this._hRef = hRef;
    }
}
export default class NavBar {
    private navItemList: NavItem[] = [new NavItem("Home", "#navbarid"), new NavItem("About Me", "#aboutme"), new NavItem("Services", "#service-section"),
    new NavItem("Portfolio", "#portfolio-section"), new NavItem("Blog", "#lastestnews-section"), new NavItem("Contact", "#contact-section")];
    private generateNavItem() {
        let navItem: JSX.Element[] = this.navItemList.map((item, index) => {
            let itemName: string = item.name.toUpperCase();
            return (
                <li className="nav-item ">
                    <a className={"nav-link text-light " + ((index===0)?"active":"")}  aria-current="page" href={item.hRef}>{itemName}</a>
                </li>
            );
        });
        return navItem;
    }
    public getNavBarContent() {
        return (
            <section id="navbarid">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand fw-bold text-light fs-5" href="#"><span className="">Kien</span></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                {this.generateNavItem()}
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>

        )
    }
}