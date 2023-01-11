import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
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
export default class NavBar extends React.Component {
    private _navItemList: NavItem[] = [new NavItem("Home", "#navbarid"), new NavItem("About Me", "#aboutme"),
        new NavItem("Services", "#service-section"),
        new NavItem("Portfolio", "#portfolio-section"), new NavItem("Blog", "#lastestnews-section"), 
        new NavItem("Contact", "#contact-section")];

    private _generateNavItem() {
        let navItem: JSX.Element[] = this._navItemList.map(item => {
            return (
                <Nav.Link href={item.hRef} className="text-light">
                    {item.name.toUpperCase()}
                </Nav.Link>
            );
        });
        return navItem;
    }
    public render() {
        return (
            <section id="navbar-section">
                <Navbar expand={"lg"}>
                    <Container fluid>
                        <NavbarBrand href="#aboutme-section" className="fw-bold text-light fs-5">
                            <span className="">Kien</span>
                        </NavbarBrand>
                        <NavbarToggle aria-controls="navbarSupportedContent">
                        </NavbarToggle>
                        <Navbar.Collapse id="navbarSupportedContent"> 
                            <Nav className="ms-auto mb-2 mb-lg-0"> 
                                {this._generateNavItem()}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </section>
        )
    }
}