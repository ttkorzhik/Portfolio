import React, {FC} from 'react';

import {Col} from "react-bootstrap";

import styles from "../ProjectCard/ProjectCard.module.css"

export interface ProjectProps {
    id: number
    title: string
    description: string,
    imgUrl: string,
}

const ProjectCard:FC<ProjectProps> = ({title, imgUrl, description}) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className={styles.project}>
                <img src={imgUrl} className={styles.projectImg}/>
                <div className={styles.projectText} >
                    <h4 className={styles.projectTitle} >{title}</h4>
                    <span className={styles.projectDescription}>{description}</span>
                </div>
            </div>
        </Col>
    );
};

export default ProjectCard;