import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Alert from "react-bootstrap/Alert";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./styles.module.css";
import Accordian from "react-bootstrap/Accordion";
import facts from "../info/faq.json"
import "./faq.css"



import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

function InfoSection(props) {

  return (<div className="border info-card" style={{ height: '100%', backgroundColor: props.color }}>
    <Accordian className="mx-auto my-5" style={{ width: '90%' }}>
      <Accordian.Button className="info-header" style={{ backgroundColor: 'transparent' }}><p>{props.title}</p></Accordian.Button>
      <hr size="7"></hr>
      <Accordian.Body>
        {props.info.map(infoItem =>
          <div className="my-4 question-answer">
            <h4>{infoItem.question}</h4>
            <p>{infoItem.answer}</p>
          </div>
        )}
      </Accordian.Body>
    </Accordian>
  </div>);
}

export default function Faq() {
  const [query, setQuery] = useState({ email: "", message: "" });
  const [queryAlert, setQueryAlert] = useState(false);

  const messageCollectionRef = collection(db, "messages");

  const valid_message = (obj) => {
    if (obj.email.trim() === "" || obj.message.trim() === "") {
      return false;
    }
    return true;
  };

  const handleQuery = async () => {
    if (!valid_message(query)) {
      setQueryAlert(true);
    } else {
      try {
        await addDoc(messageCollectionRef, query);
        alert("your message was successfully submitted");
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
        <h1 style={{ color: "#FFFFFF" }}>Frequently Asked Questions</h1>
        <div style={{ flex: 1 }}></div>
      </div>
      {facts.map(fact =>
        <InfoSection
          color={fact.color}
          title={fact.title}
          info={fact.info}
        >
        </InfoSection>
      )}

      <div className={styles.container}>
        <h1>Can't find what you're looking for?</h1>
        <p>Let us help you!</p>

        <p className={styles.applyText}>Email</p>
        <TextField
          sx={{ width: "100%" }}
          placeholder="Your email"
          onChange={(e) =>
            setQuery((prev) => {
              return {
                ...prev,
                email: e.target.value,
              };
            })
          }
        />
        <p className={styles.applyText}>Message</p>
        <TextField
          sx={{ width: "100%" }}
          placeholder="Message"
          onChange={(e) =>
            setQuery((prev) => {
              return {
                ...prev,
                message: e.target.value,
              };
            })
          }
        />
        {queryAlert ? (
          <Alert variant="danger" className="text-center mt-3 w-25">
            All fields must be filled out
          </Alert>
        ) : null}
        <Button
          variant="contained"
          sx={{
            display: "block",
            backgroundColor: "#000000",
            marginTop: "20px",
            height: "50px",
            width: "150px",
            fontSize: "1.3rem",
          }}
          onClick={handleQuery}
        >
          Send
        </Button>
      </div>
      <Footer />
    </React.Fragment>
  );
}
