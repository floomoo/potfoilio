import { useState, useEffect } from "react";
import { Container, Row, col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img/svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Devolpment","Web Designer","UI/UX Designer" ];
    const [text, setText] = useState('');
    const [delta, setDalta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let thicker = setInterval(() => {
            thick();
            },delta)

            return () => { clearInterval(thicker)};
        }, [Text])

        const tick = () => {
            let i = loopNum % toRotate.length;
            let fullText = toRotate[i];
            let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1 );

            setText(updatedText);

            if(isDeletingText);
             stDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeletinig && updateText ===''){
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setDelta(500);
            }
        }

    return(
    
       <section className="banner" id="home">
       <Container>
        <Row className="align-items-center">
            <col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to my portfloio</span>
                <h1>{ 'Hi I'm Webdecoded' }<span className="wrap">{text}</span></h1>
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
