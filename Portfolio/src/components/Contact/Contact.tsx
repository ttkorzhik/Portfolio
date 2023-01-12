import React, {FC, useState} from 'react';

import contactImg from "../../assets/img/contact-img.svg"
import {Col, Container, Row} from "react-bootstrap";
import emailJS from 'emailjs-com';
import TrackVisibility from 'react-on-screen';

import styles from "../Contact/Contact.module.css"

interface FormProps {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    message: string
}
enum SubmitTextVariants {
    SEND = "Send",
    SENDING = "Sending..."
}

interface StatusProps {
    success: boolean
    message: string
}

const Contact:FC = () => {
    const FormInitialState = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [form, setForm] = useState<FormProps>(FormInitialState)
    const [submitText, setSubmitText] = useState<SubmitTextVariants>(SubmitTextVariants.SEND)
    const [status, setStatus] = useState<StatusProps | null>(null)

    const onFormUpdate = (category: string, value: string) => {
        setForm({...form, [category]: value})
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!form.email) {
            setStatus({success: false, message: 'Email field must be filled!'});
            return
        } else {
            setSubmitText(SubmitTextVariants.SENDING);
            if (process.env.REACT_APP_SERVICE_ID && process.env.REACT_APP_TEMPLATE_ID) {
                emailJS.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
                    .then((result) => {
                        setForm(FormInitialState);
                        setSubmitText(SubmitTextVariants.SEND);
                        setStatus({success: true, message: 'Message sent successfully'});
                    }, (error) => {
                        console.log(error.text);
                        setStatus({success: false, message: 'Something went wrong, please try again later.'});
                    });
            }

        }
    }

    return (
        <section id="contact" className={styles.contact}>
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={`${isVisible ? styles.scale : ""} ${styles.img}`} src={contactImg} alt="Contact Us"/>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <h2 className={styles.title}> Get in touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                    <input className={styles.input} type="text" value={form.firstName} name="firstName" placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input className={styles.input} type="text" value={form.lastName} name="lastName" placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input className={styles.input} type="email" value={form.email} name="email" placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input className={styles.input} type="tel" value={form.phone} name="phone" placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                                </Col>
                                <Col size={12} className="px-1">
                                    <textarea className={styles.textarea} rows={7} value={form.message} name="message" placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                    <button className={styles.btn} type="submit"><span className={styles.btnSpan}>{submitText}</span></button>
                                </Col>
                                {status?.message &&
                                <Col>
                                    <p className={`${!status.success ? styles.danger : styles.success}`}>{status.message}</p>
                                </Col>}
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;