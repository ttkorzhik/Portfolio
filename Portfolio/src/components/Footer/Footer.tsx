import React, {FC} from 'react';

import logo from "../../assets/img/photo_2021-01-10_00-25-02.jpg"
import navIcon1 from "../../assets/img/nav-icon1.svg"
import navIcon2 from "../../assets/img/nav-icon2.svg"
import navIcon3 from "../../assets/img/nav-icon3.svg"

import {Col, Container, Row} from "react-bootstrap";
import Git from "../Git/Git";

import styles from "../Footer/Footer.module.css"


const Footer:FC = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <Row className="align-items-center">
                    <Git/>
                    <Col size={12} sm={6}>
                        <img className={styles.logo} src={logo} alt="Logo" />
                        <h4>Tanya Korshik</h4>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className={styles.social}>
                            <a  className={styles.link} href="https://www.linkedin.com/in/tatsiana-korshik-236a98238/">
                                <img src={navIcon1} alt=" " className={styles.img}/>
                            </a>
                            <a className={styles.link} href="https://t.me/kkorzhik">
                                <img src={navIcon2} alt=" " className={styles.telegram}/>
                            </a>
                            <a className={styles.link} href="https://www.instagram.com/t.korshik_">
                                <img src={navIcon3} alt=" " className={styles.img}/>
                            </a>
                        </div>
                        <p className={styles.copyright}>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;