import React, {FC, useEffect, useState} from 'react';

import Logo from "../../assets/img/photo_2021-01-10_00-25-02.jpg"
import navIcon1 from "../../assets/img/nav-icon1.svg"
import navIcon2 from "../../assets/img/nav-icon2.svg"
import navIcon3 from "../../assets/img/nav-icon3.svg"

import {Container, Nav, Navbar} from "react-bootstrap";

import styles from "../NavBar/NavBar.module.css"

const NavBar:FC = () => {
    const [activeLink, setActiveLink] = useState<string>("home")
    const [scrolled, setScrolled] = useState<boolean>(false)

    const onUpdateActiveLink = (value: string) => {
        setActiveLink(value);
    }

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <Navbar expand="md" className={`${scrolled ? styles.scrolled : styles.nav}`}>
            <Container>
                <Navbar.Brand href="#home" className={styles.brand}>
                    <img src={Logo} alt="Logo" className={styles.logo}/>
                </Navbar.Brand>
                <Navbar.Toggle className={styles.toggle} aria-controls="basic-navbar-nav">
                    <span className={styles.navBarToggleIcon}/>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home"
                                  className={`${activeLink === "home" ? styles.active : styles.link}`}
                                  onClick={() => onUpdateActiveLink('home')}>
                            Home
                        </Nav.Link>
                        <Nav.Link href="#skills"
                                  className={`${activeLink === "skills" ? styles.active : styles.link}`}
                                  onClick={() => onUpdateActiveLink('skills')}>
                            Skills
                        </Nav.Link>
                        <Nav.Link href="#projects"
                                  className={`${activeLink === "projects" ? styles.active : styles.link}`}
                                  onClick={() => onUpdateActiveLink('projects')}>
                            Projects
                        </Nav.Link>
                    </Nav>
                    <span className={styles.navBarText}>
                        <div className={styles.social}>
                            <a href="https://www.linkedin.com/in/tatsiana-korshik-236a98238/">
                                <img src={navIcon1} alt=" " className={styles.img}/>
                            </a>
                            <a href="https://t.me/kkorzhik">
                                <img src={navIcon2} alt=" " className={styles.telegram}/>
                            </a>
                            <a href="https://www.instagram.com/t.korshik_">
                                <img src={navIcon3} alt=" " className={styles.img}/>
                            </a>
                        </div>
                        <button className={styles.btn}>
                            <a href={"#contact"} className={styles.btnText}>Let's connect</a>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;