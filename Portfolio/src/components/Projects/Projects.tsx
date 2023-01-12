import React, {FC} from 'react';

import projImg1 from "../../assets/img/pr1.png";
import projImg2 from "../../assets/img/pr2.png";
import projImg3 from "../../assets/img/pr3.png";
import projImg4 from "../../assets/img/pr4.png";
import projImg5 from "../../assets/img/pr5.png";
import projImg6 from "../../assets/img/pr6.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";

import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import ProjectCard, {ProjectProps} from "./ProjectCard/ProjectCard";

import styles from "../Projects/Projects.module.css"

const Projects:FC = () => {

    const projects: ProjectProps[] = [
        {   id: 1,
            title: "Crypto Hunter",
            description: "React",
            imgUrl: projImg1,
        },
        {
            id: 2,
            title: "Pixema",
            description: "React",
            imgUrl: projImg2,
        },
        {
            id: 3,
            title: "Fodo",
            description: "React",
            imgUrl: projImg3,
        },
        {
            id: 4,
            title: "MoGo",
            description: "HTML and CSS ",
            imgUrl: projImg5,
        },
        {
            id: 5,
            title: "Blogofolio",
            description: "React",
            imgUrl: projImg6,
        },
        {
            id: 6,
            title: "Wildberries",
            description: "JavaScript",
            imgUrl: projImg4,
        },
    ];
    return (
        <section id="projects" className={styles.projects}>
            <Container>
                <Row>
                    <Col size={12}>
                        <h2 className={styles.title}>Projects</h2>
                        <p className={styles.description}>My works</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className={styles.nav} id="pills-tab">
                                <Nav.Item className={styles.navItem}>
                                    <Nav.Link className={styles.navLink} eventKey="first" >Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className={styles.navItem}>
                                    <Nav.Link eventKey="second" className={styles.navLink}>Crypto</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className={styles.navItem}>
                                    <Nav.Link eventKey="third" className={styles.navLink}>Pixema</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp">
                                <Tab.Pane eventKey="first" >
                                    <Row>
                                        {projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={project.id} {...project}/>)})}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div className={styles.description}>
                                        <p className={styles.descriptionBold}>Crypto Hunter</p>
                                        Description: Web site for tracking cryptocurrency rates.
                                        It is possible to set a different currency and time period in
                                        order to track how the exchange rate has changed on the price-time graph.
                                        The user can create an account to add to favorites the cryptocurrencies
                                        that interest him the most. <br/><br/>
                                        Environment: TypeScript, React, Redux, React-chartJS,
                                        React-alice-carousel, React-router-dom, Firebase, Material UI, API, HTTP,
                                        JSON, WebStorm,
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <div className={styles.description}>
                                        <p className={styles.descriptionBold}>Pixema</p>
                                        Description: A movie search website with the ability to view information about
                                        a single movie, add movies to favorites, search for movies by selected filters,
                                        and change the theme of the site.<br/><br/>
                                        Environment: TypeScript, React, Redux, React-select, React-thunk,
                                        React-router-dom, Firebase, WebStorm, API, HTTP, JSON
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className={styles.img} alt="backgroundImg" src={colorSharp2}></img>
        </section>
    );
};

export default Projects;