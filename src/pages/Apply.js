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



function Question(props) {
  return (<div>
    <p className={styles.applyText}>
      {props.question}
    </p><TextField
      className="w-100"
      placeholder={props.placeholder}
      onChange={(e) =>
        props.setFunction((prev) => {
          var info = { ...prev }
          info[props.type] = e.target.value
          return info;
        })
      }
    />
  </div>);
}

function Form(props) {
  return (<div className="py-3">
    <h1>{props.title}</h1>
    <p>
      {props.info}
    </p>
    <i>
      We recommend typing your answers in an external text editor and
      pasting your answers here.
    </i>
    <hr />

    {props.questions.map((info) =>
      <Question setFunction={props.setFunction} {...info}></Question>
    )}

    {props.alert ? (
      <Alert variant="danger" className="text-center mt-3 w-25">
        All fields must be filled out
      </Alert>
    ) : null}
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#000000",
        fontSize: "1.3rem",
      }}
      className="mt-3"
      onClick={props.handleFunction}
    >
      {props.button}
    </Button>
  </div>);
}

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

  const speakerApplication = {
    title: "Apply To Be Speaker",
    info: `Do you have an idea worth spreading? The TEDxCornell stage is the
            perfect place to share it! Apply today to potentially get selected as
            a speaker for our next event!`,
    setFunction: setApp,
    handleFunction: handleApply,
    alert: appAlert,
    button: 'Apply!',
    questions: [{
      question: 'Email',
      type: 'email',
      placeholder: 'Your email'
    },
    {
      question: 'Name',
      type: 'name',
      placeholder: 'Your name'
    },
    {
      question: `Location; if selected as a speaker, where would you likely be
            traveling from?`,
      type: 'location',
      placeholder: 'Your answer'
    },
    {
      question: `Tell us about yourself, i.e. your occupation, experience, etc. (250
            words max).`,
      type: 'info',
      placeholder: 'Your answer'

    }
    ]
  }

  const nomination = {
    title: "Nominate A Speaker",
    info: `Know someone fanatastic that could be a good fit for TEDxCornell?
            Nominate them!`,
    setFunction: setNominate,
    handleFunction: handleNominate,
    alert: nomAlert,
    button: 'Nominate!',
    questions: [{
      question: 'Email',
      type: 'email',
      placeholder: 'Your email'
    },
    {
      question: 'Name',
      type: 'name',
      placeholder: 'Your answer'
    },
    {
      question: `Location; if selected as a speaker, where would they likely be
            traveling from?`,
      type: 'location',
      placeholder: 'Your answer'
    },
    {
      question: `Tell us about them, i.e. their occupation, experience, etc. (250 words
            max).`,
      type: 'info',
      placeholder: 'Your answer'

    }
    ]
  }

  const acceptingSpeakers = false
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
        {acceptingSpeakers &&
          <div>
            <Form {...speakerApplication} ></Form>
            <hr></hr>
            <Form {...nomination}></Form>
          </div>
        }
      </Container>
      <Footer />
    </React.Fragment>
  );
}
