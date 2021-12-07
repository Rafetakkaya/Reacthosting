import React from 'react';
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";
import { BsFillInfoSquareFill } from "@react-icons/all-files/bs/BsFillInfoSquareFill";
import { BsPen } from "@react-icons/all-files/bs/BsPen";
import { BsChatDots } from "@react-icons/all-files/bs/BsChatDots";
import { FaHeadphones } from "@react-icons/all-files/fa/FaHeadphones";
import { BsFillBagFill } from "@react-icons/all-files/bs/BsFillBagFill";




import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import {Link} from "react-router-dom"


import "../Css/Cap.css"

const Cap = () => {

    return (
        <div className="fixed">
            <div className="gate">

                <div className="header_options">
                    <span className="header_option-Line">
                        <Link className="link" to="/">
                        <BsFillInfoSquareFill className="bankicon" /></Link>
                        <Link className="link" to="/">Bilgi Bankası</Link>
                    </span>
                    <span className="header_option-Line">
                    <Link className="link" to="/">
                        <BsPen className="bankicon" /></Link>

                        <Link className="link" to="/">Blog</Link>
                    </span>
                    <span className="header_option-Line">
                    <Link className="link" to="/">
                        <BsChatDots className="bankicon" /></Link>
                        <Link className="link" to="/">iletişim</Link>
                    </span>
                    <span className="header_option-Line">
                    <Link className="link" to="/">
                        MÜŞTERİ HİZMETLERİ:0(212) 539 39 95</Link>
                        <Link className="link" to="/">  <FaHeadphones className="bankicons" />
                        </Link>

                    </span>
                    <span className="header_option-Line">
                        <img className="fleg" src="https://seeklogo.com/images/T/turk-bayragi-flag-of-turkey-logo-BD14DB50D9-seeklogo.com.png"></img>
                        <select className="section">
                            
                            <option className="Turkce" value="Turkce">Türkçe</option>
                            <option className="english" value="english">English</option>
                        </select>

                    </span>

                    <span className="header_option-Line">
                    <Link className="link" to="/">

                        Para Birimi </Link>
                        <span className="para">
                            US $<input className="check" type="radio"  />
                        </span>

                    </span >
                    <span className="header_option-Line">
                    <Link className="link" to="/">
                        <BsFillBagFill className="bankicon" /></Link>
                        <Link className="link" to="/">Sepetim</Link>
                    </span >

                </div>
            </div>


            < Navbar  collapseOnSelect expand="xl" bg="white" text="dark" variant="light" id="navbarnav" >

                <Container  className="text-dark">

                    <Navbar.Toggle className="text-dark" aria-controls="responsive-navbar-nav" />
                    <Navbar.Brand href="#home"> <img className="header_logo" src="https://www.umutyasar.com/wp-content/uploads/2021/11/logo.png" alt="hostiki" /></Navbar.Brand>
                    <FiShoppingCart className="FiShoppingCart" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className=" anasayfa">
                            <Nav.Link className="text-dark  " href="#features">Ana Sayfa</Nav.Link>

                            <Nav.Link className="text-light" > <NavDropdown title="Hosting" id="collasible-nav-dropdown">
                                <NavDropdown.Item  href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item  href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item  href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item  href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown></Nav.Link>



                            <button className="yeni">Yeni</button>

                            <Nav.Link className="text-dark ">
                                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav.Link>

                            <Nav.Link className="text-dark" text="dark" href="#features">E-Posta</Nav.Link>
                            <Nav.Link className="text-dark" href="#features">Server</Nav.Link>
                            <Nav.Link className="text-dark" href="#features">SLL</Nav.Link>

                            <Nav.Link className="text-dark" href="#features"> Giriş Yap</Nav.Link>
                            <button className="kayıtol">Kayıt Ol</button>



                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar >
            
        </div>
    );
}

export default Cap;


