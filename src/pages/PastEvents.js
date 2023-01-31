import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import styles from "./styles.module.css";
import './pastEvents.css'
import speakers_2022 from "./2022SpeakerInfo";


import { Container, Row, Col } from "react-bootstrap";
import davidschmoys from "../assets/davidschmoys.png";
import matthewdicks from "../assets/matthewdicks.jpeg";
import dydineanderson from "../assets/dydineanderson.jpg";
import rajsuchak from "../assets/rajsuchak.jpg";
import nathanlaurenz from "../assets/nathanlaurenz.jpg";
import karinsternberg from "../assets/karinsternberg.jpg";
import carsontaylor from "../assets/carsontaylor.jpg";
import marcelaotalora from "../assets/marcelaotalora.jpg";
import danieljames from "../assets/danieljames.jpg";
import larrywilliams from "../assets/larrywilliams.jpg";
import ishansharma from "../assets/ishansharma.jpg";
import cathoke from "../assets/cathoke.jpg";
import johnjackson from "../assets/johnjackson.jpg";

import uproot from "../assets/uproot.png";
import unmuted from "../assets/unmuted.png";

function SpeakerCard(props) {
  return (
    <div className={"d-flex py-3 " + (props.onRight ? "flex-row-reverse" : "")} >
      <div class="card mb-3 speaker-card col-md-10" >
        <div className={"row no-gutters " + (props.onRight ? "flex-row-reverse" : "") }>
          <div class="col-md-4">
            <Image className="rounded h-100" fluid src={props.img}></Image>
          </div>
          <div class="col-md-8" >
            <div class="card-body text-center py-4" >
              <h4 className="text-center">{props.name}</h4>
              <h5 class="text-center">{props.speech}</h5>
              <p class="card-text py-3" style={props.fontSize ? { fontSize: props.fontSize, lineHeight: props.lineHeight } : {}}>{props.speechInfo}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PastEvents() {
  return (
    <React.Fragment>
      <Nav />

      <iframe
        width="100%"
        height="800px"
        src="https://www.youtube.com/embed/N-l1xtCMnpw"
        title="TEDx Intro Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <Container>
        <Row className="row mt-5">
          <Col>
            <h1>Unmuted</h1>
            <p>
              For the past two years, we have all had to sit behind our screens,
              attending meeting after meeting, unable to properly express our
              ideas and our stories. Join us and our speakers as we are at long
              last, finally able to become Unmuted.
            </p>
          </Col>
          <Col>
            <img
              src={unmuted}
              alt="[unmuted logo]"
              className={styles.landingImg}
            />
          </Col>
        </Row>
      </Container>

      <Container className="mt-3">

        {speakers_2022.map((speaker, i) =>
          <SpeakerCard {...speaker} onRight={i % 2 != 0}></SpeakerCard>

        )}

      </Container>



      <hr />
      <Container>
        <Row className="row mt-5">
          <Col>
            <h1>Uproot</h1>
            <p>
              In the midst of the pandemic, we were forced to introspect and
              reevaluate ourselves, our communities, and the world around us.
              With the challenges that we face come great opportunities for
              growth and change. Our 2020 speakers addressed our most pressing
              social issues, shared groundbreaking and hope-inspiring research,
              dug deep to share their personal stories, and inspired us to
              reflect on what opportunities lie where we least expect them.
            </p>
          </Col>
          <Col>
            <img
              src={uproot}
              alt="[uprooted logo]"
              className={styles.landingImg}
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="row mt-5">
          <Col>
            <img
              src={marcelaotalora}
              alt="marcel aotalora"
              className={styles.landingImg}
            />
            <p className={styles.memberInfo}>
              The Healing Power of MDMA through Reconnection <br /> Marcela
              Ot'Alora
            </p>
          </Col>
          <Col>
            <img
              src={danieljames}
              alt="Daniel James II"
              className={styles.landingImg}
            />
            <p className={styles.memberInfo}>
              Why You Should Never Tell a Black Child They Act White <br />{" "}
              Daniel James II
            </p>
          </Col>
          <Col>
            <img
              src={larrywilliams}
              alt="Larry Williams Jr."
              className={styles.landingImg}
            />
            <p className={styles.memberInfo}>
              The American Dream is a Nightmare for Workers <br />
              Larry Williams Jr.
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="row mt-5">
          <Col>
            <img
              src={ishansharma}
              alt="Ishan Sharma"
              className={styles.landingImg}
            />
            <p className={styles.memberInfo}>
              Democracy & Emerging Surveillance Technology: How We Stop 2030
              From Becoming 1984. <br /> Ishan Sharma
            </p>
          </Col>
          <Col>
            <img src={cathoke} alt="Cat Hoke" className={styles.landingImg} />
            <p className={styles.memberInfo}>
              Stop Cancelling Yourself <br /> Cat Hoke
            </p>
          </Col>
          <Col>
            <img
              src={johnjackson}
              alt="john jackson"
              className={styles.landingImg}
            />
            <p className={styles.memberInfo}>
              How I Got Out of a Prison Gang <br />
              John Jackson
            </p>
          </Col>
        </Row>
      </Container>

      <Footer />
    </React.Fragment>
  );
}
