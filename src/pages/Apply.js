import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Alert from "react-bootstrap/Alert";
import TextField from "@mui/material/TextField";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "@mui/material/Button";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';

import "./apply.css"


import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

library.add(faMicrophoneAlt)


export default function Apply() {
  const [app, setApp] = useState({
    email: "",
    name: "",
    location: "",
    info: "",
  });

  const [nominate, setNominate] = useState({
    email: "",
    name: "",
    location: "",
    info: "",
  });

  const [appAlert, setAppAlert] = useState(false);
  const [nomAlert, setNomAlert] = useState(false);

  const appCollectionRef = collection(db, "applications");
  const nomCollectionRef = collection(db, "nominations");

  const valid_application = (obj) => {
    if (
      obj.email.trim() === "" ||
      obj.name.trim() === "" ||
      obj.location.trim() === "" ||
      obj.info.trim() === ""
    ) {
      return false;
    }
    return true;
  };

  const handleApply = async () => {
    if (!valid_application(app)) {
      setAppAlert(true);
    } else {
      try {
        await addDoc(appCollectionRef, app);
        alert("your application was successfully submitted");
      } catch (e) {
        alert("an error occurred");
      }
    }
  };

  const handleNominate = async () => {
    if (!valid_application(nominate)) {
      setNomAlert(true);
    } else {
      try {
        await addDoc(nomCollectionRef, nominate);
        alert("your nomination was successfully submitted");
      } catch (e) {
        alert("an error occurred");
      }
    }
  };

  return (
    <React.Fragment>
      <Nav />
      <div className={styles.apply}>
        <div style={{ flex: 1 }}></div>
        <h1 style={{ color: "#FFFFFF" }}>
          Have a great idea? Apply to speak at our event.
        </h1>
        <div style={{ flex: 1 }}></div>
      </div>

      <Container className="my-5">
        <Row className="justify-content-evenly">
          <Col md={4} className="py-3">
            <Card className="apply-card text-center py-3 px-4 h-100 text-black">
              <Card.Body>
                <FontAwesomeIcon style={{ fontSize: '45px', color: 'red' }} icon='microphone-alt'></FontAwesomeIcon>
                <div className="pt-4">
                  <h4 style={{ color: 'black' }}><b>Apply To Be Speaker</b></h4>
                  <p className="py-3">Applications to be a speaker at this year's event are now closed.
                    Check back next fall to apply for next year's event!</p>
                  <div className="text-danger"><p>Applications are Closed</p></div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </React.Fragment>
  );
}
