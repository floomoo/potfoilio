import {useState, useEffect} from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(()  => {
       const onScroll = () => {
        if (window.scrolly > 50) {
           seScrolled(true);
        } else {
            seScrolled(false);
        }
       } 

       window.addEventListener("scroll",onScroll);

       return () => window.removeEventListener("scroll", onscroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
                <Navbar.Brand href="#home">
                    <Img src={logo} alt="logo" />
                </Navbar.Brand>  
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavBar.link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}on Click={() => onUpdateActiveLink('home')}>Home</NavBar.link>
                    <NavBar.link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}on Click={() => onUpdateActiveLink('skills')}>link</NavBar.link>
                    <NavBar.link href="#projects" className={activeLink === 'progects' ? 'active navbar-link' : 'navbar-link'}on Click={() => onUpdateActiveLink('projects')}>link</NavBar.link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="#"><img src={navIcon1} alt="" /></a>
                        <a href="#"><img src={navIcon2} alt="" /></a>
                        <a href="#"><img src={navIcon3} alt="" /></a>
                    </div>
                    <button className="vvd" onClick="vvd" onClick={( =>console.log('connect'))}><span>Let's Connect</span></button>
                </span>
            </Navbar.Collapse>
        </Container>
       </Navbar>
    )
}