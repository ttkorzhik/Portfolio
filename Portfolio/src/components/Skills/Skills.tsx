import React, {FC} from 'react';

import meter1 from "../../assets/img/meter1.svg"
import meter2 from "../../assets/img/meter2.svg"
import meter3 from "../../assets/img/meter3.svg"
import colorSharp from "../../assets/img/color-sharp.png"

import Carousel from 'react-multi-carousel';
import {Col, Container, Row} from "react-bootstrap";

import 'react-multi-carousel/lib/styles.css';
import styles from "../Skills/Skills.module.css"

const Skills:FC = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section id="skills" className={styles.skills}>
            <Container>
                <Row>
                   <Col>
                       <div className={styles.skillsBox}>
                           <h2 className={styles.header}>Skills</h2>
                           <div className={styles.description}>Languages: JavaScript/ES6, TypeScript <br/>
                               Frameworks/Technologies: React <br/>
                               Web development: HTML, CSS, SASS, Bootstrap, Material UI, HTTP, JSON, AJAX, API <br/>
                               DB technologies: MS SQL, Firebase <br/>
                               Others: Node. JS, Parcel, Webpack, Gulp, Figma, EmailJS, Framer Motion, Jest <br/>
                               IDE: WebStorm, Visual Studio <br/>
                               Version Control System: Git, Jira <br/>
                               English proficiency: Intermediate <br/>
                           </div>
                           <Carousel responsive={responsive} infinite className={styles.skillsSlider}>
                               <div className={styles.item}>
                                   <img className={styles.diagram} src={meter1} alt="img"/>
                                   <h5>JavaScript</h5>
                               </div>
                               <div className={styles.item}>
                                   <img className={styles.diagram}  src={meter2} alt="img"/>
                                   <h5>NodeJS</h5>
                               </div>
                               <div className={styles.item}>
                                   <img className={styles.diagram}  src={meter3} alt="img"/>
                                   <h5>React</h5>
                               </div>
                               <div className={styles.item}>
                                   <img className={styles.diagram}  src={meter3} alt="img"/>
                                   <h5>TypeScript</h5>
                               </div>
                           </Carousel>
                       </div>
                   </Col>
                </Row>
            </Container>
            <img className={styles.backColor} src={colorSharp} alt="Image" />
        </section>
    );
};

export default Skills;