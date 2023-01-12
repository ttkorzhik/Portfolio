import React, {FC, useEffect, useState} from 'react';

import headerImg from "../../assets/img/header-img.svg"
import {Col, Container, Row} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";

import styles from "../Banner/Banner.module.css"

const Banner:FC = () => {
    const [loopNum, setLoopNum] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [text, setText] = useState<string>('');
    const period:number = 2000;
    const [delta, setDelta] = useState<number>(300 - Math.random() * 100);
    const [index, setIndex] = useState<number>(1);
    const toRotate:string[] = [ "Front-End Developer", "React Developer", "Web Developer" ];


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i:number = loopNum % toRotate.length;

        let fullText:string = toRotate[i];
        let updatedText:string = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section id="home" className={styles.banner}>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className={styles.tagline}>Welcome to my Portfolio</span>
                        <h1 className={styles.title}>{`Hi, I'm Tanya, `}
                            <span className={styles.profession}>{text}</span>
                        </h1>
                        <p className={styles.text}>Front-End developer with over a year of experience.
                            Worked with React, JS, HTML, CSS.
                            Responsible, resourceful and detail-oriented, able to grasp new technology quickly.
                            With strong analytical, communication, self-learning skills.
                        </p>
                        <button className={styles.connectBtn}>
                            <a href={"#contact"} className={styles.btnText}>Let's connect
                                <ArrowRightCircle className={styles.connectSvg} size={25}/>
                            </a>
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Img" className={styles.bannerImg}/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;