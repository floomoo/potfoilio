import { useState, useEffect } from "react";
import { Container, Row, col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img/svg";

export const Banner = () => {
    const []
    const toRotate = ["Web Devolpment","Web Designer","UI/UX Designer" ];
    return(
    
       <section className="banner" id="home">
       <Container>
        <Row className="align-items-center">
            <col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to my portfloio</span>
                <h1>{'Hi I'm webdecoded'}<span className="wrap">web developer</span></h1>
                <p> when did genny say she coming she in come yet o my geny my genny</p>
                <button onCLick={() =>console.log('connect')}>Let's connect <ArrowRightCircle size={25} /> </button>
            </col>
            <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt="Header Img" />
            </Col>
        </Row>
       </Container>

       </section> 
    )
}