import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import styles from "./styles.module.css";
import './pastEvents.css'
import speakers_2022 from "./2022SpeakerInfo";
import speakers_2021 from "./2021SpeakerInfo";


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

function UnmutedSpeakerCard(props) {
  return (
    <div className={"d-flex py-3 " + (props.onRight ? "flex-row-reverse" : "")} >
      <div className="card mb-3 unmuted-speaker-card col-md-10" >
        <div className={"row no-gutters " + (props.onRight ? "flex-row-reverse" : "")}>
          <div className="col-md-4">
            <Image className="rounded h-100" fluid src={props.img}></Image>
          </div>
          <div className="col-md-8" >
            <div className="card-body text-center py-4" >
              <h4 className="text-center">{props.name}</h4>
              <h5 className="text-center">{props.speech}</h5>
              <p className="card-text py-3" style={props.fontSize ? { fontSize: props.fontSize, lineHeight: props.lineHeight } : {}}>{props.speechInfo}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UprootSpeakerCard(props) {
  return (<Col md={3}>
    <Card className="uproot-speaker-card">
      <Image fluid src={props.img} />
      <Card.Body className="text-center">
        <p>
          {props.name}
        </p>
        <h5>{props.speech}</h5>
      </Card.Body>
    </Card>
  </Col>)
}

function Uproot(speakers){
  var cards = []
  var rowSize = 3
  var rows =  []
  for(var i in speakers) {
    cards.push((<UprootSpeakerCard {...speakers[i]}></UprootSpeakerCard>))
  }
  for(var i = 0; i < cards.length; i += rowSize) {
    var group = cards.slice(i, i + rowSize);
    rows.push((<Row className="row justify-content-around mt-5">{group}</Row>))
  }
  return rows
}

function SpeakerTest(props) {
  return (
    <div className={"d-flex py-3 " + (props.onRight ? "flex-row-reverse" : "")} >
      <div className="card mb-3 unmuted-speaker-card " >
        <div className={"row no-gutters " + (props.onRight ? "flex-row-reverse" : "")}>
          <div className="col-md-4">
            <Image className="rounded h-100" fluid src={props.img}></Image>
          </div>
          <div className="col-md-8" >
            <div className="card-body text-center py-4" >
              <h4 className="text-center">{props.name}</h4>
              <h5 className="text-center">{props.speech}</h5>
              <p className="card-text py-3" style={props.fontSize ? { fontSize: props.fontSize, lineHeight: props.lineHeight } : {}}>{props.speechInfo}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Event(speakerInfo) {

  var rows = []
  console.log(speakerInfo)
  for (var i in speakerInfo) {
    var speaker = speakerInfo[i]
    var card = <Col md><SpeakerTest {...speaker} onRight={i % 2 != 0}></SpeakerTest></Col>
    if (rows.length == i / 2) {
      rows.push([card])
    }
    else {
      rows[Math.floor(i / 2)].push(card)
    }
  };
  console.log(rows)

  return rows.map((row, i) =>
    <Row>{row}</Row>
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

      <div className="pt-5">
        <Container >
          <Row className="row">
            <Col className="unmuted text-center">
              <h1>Unmuted</h1>
              <p className="">
                For the past two years, we have all had to sit behind our screens,
                attending meeting after meeting, unable to properly express our
                ideas and our stories. Join us and our speakers as we are at long
                last, finally able to become Unmuted.
              </p>
            </Col>
            <Col md="4">
              <Image fluid
                src={unmuted}
                alt="[unmuted logo]"
                className={styles.landingImg}
              />
            </Col>
          </Row>

          {
            speakers_2022.map((speaker, i) =>
              <UnmutedSpeakerCard {...speaker} onRight={i % 2 != 0}></UnmutedSpeakerCard>

            )}
        </Container>
      </div>

      <Container className="mt-3">

        {/* <Event {...speakers_2022}></Event> */}

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
          <Col md>
            <img
              src={uproot}
              alt="[uprooted logo]"
              className={styles.landingImg}
            />
          </Col>
        </Row>
      </Container>

      <Container className = "pb-5">
       <Uproot {...speakers_2021}></Uproot>
      </Container>

     
      <Footer />
    </React.Fragment>
  );
}
