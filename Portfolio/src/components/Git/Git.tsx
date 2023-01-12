import React, {FC} from 'react';
import {Col, Row} from "react-bootstrap";
import styles from "../Git/Git.module.css"

const Git:FC = () => {
    return (
        <Col lg={12}>
            <div className={styles.git}>
                <Row className={styles.container}>
                    <Col lg={12} md={6} xl={5}>
                        <h3 className={styles.title}>You can view my projects in git</h3>
                    </Col>
                    <Col md={6} xl={7}>
                        <button className={styles.btn}>
                            <a className={styles.link}href="https://github.com/ttkorzhik">Git</a>
                        </button>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};

export default Git;