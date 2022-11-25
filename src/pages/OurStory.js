import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@mui/material/Button";
import styles from "./styles.module.css";
import Container from "react-bootstrap/Container";

import andreathia from "../assets/andreathia.jpg";
import juliakwak from "../assets/juliakwak.jpg";
import juliaisko from "../assets/juliaisko.jpg";
import alicehou from "../assets/alicehou.jpg";
import justinyehuda from "../assets/justinyehuda.jpg";
import alinapereyra from "../assets/alinapereyra.jpg";
import jakezajkowski from "../assets/jakezajkowski.jpg";
import juliathomson from "../assets/juliathomson.jpg";
import jessischlewitt from "../assets/jessischlewitt.jpg";
import paulinaklubok from "../assets/paulinaklubok.jpg";
import lailarahbari from "../assets/lailarahbari.jpg";
import bridgetsantos from "../assets/bridgetsantos.jpg";
import andrewchoi from "../assets/andrewchoi.jpg";

export default function OurStory() {
  return (
    <React.Fragment>
      <Nav />

      <div className={styles.apply}>
        <h3>Want to partner with TEDxCornell?</h3>
        <h4>Learn more about sponsorships and business opportunties.</h4>
        <Button
          variant="contained"
          sx={{
            height: "60px",
            width: "150px",
            fontSize: 16,
            color: "common.white",
            backgroundColor: "#D91E18",
            borderRadius: "5px",
          }}
        >
          Learn more
        </Button>
      </div>

      <div className={styles.container}>
        <Row>
          <Col>
            <h1>TEDxCornell</h1>
            <h2>Our Founders</h2>
            <p>
              In 2017, our group's founders Kirkland Sugrim and Adam Skrocki
              wanted to bring something special to Cornell. Their words to each
              other one day: “We have to do something incredible in our time
              here. What if we organized TED talks here at Cornell for the
              student body?” That single moment defined four years of time for
              Adam and Kirk. Through the help of Eri Kato, Emily Chen, and Uzair
              Butt, they worked hard to bring speakers from around the world to
              share their ideas to inspire novel conversations and actions
              within and beyond our Cornell community.
            </p>
          </Col>
          <Col>
            <h1>TED</h1>
            <h2>History of TED </h2>
            <p>
              TED was born in 1984 out of Richard Saul Wurman's observation of a
              powerful convergence among three fields: technology, entertainment
              and design. The first TED, which he co-founded with Harry Marks,
              included a demo of the compact disc, the e-book and cutting-edge
              3D graphics from Lucasfilm, while mathematician Benoit Mandelbrot
              demonstrated how to map coastlines using his developing theory of
              fractal geometry. But despite a stellar lineup, the event lost
              money, and it was six years before Wurman and Marks tried again.
              This time, in 1990, the world was ready. The TED Conference became
              an annual event in Monterey, California, attracting a growing and
              influential audience from many different disciplines united by
              their curiosity and open-mindedness.
            </p>
          </Col>
        </Row>
      </div>

      <hr />

      <div className={styles.row}>
        <div style={{ flex: 1 }}></div>
        <h1 style={{ fontSize: "2.5rem" }}>Current Members</h1>
        <div style={{ flex: 1 }}></div>
      </div>

      <Container>
        <Row className="row mt-5">
          <Col>
            <img
              src={alinapereyra}
              alt="alina pereyra"
              className={styles.memberImg}
            />
            <p className={styles.memberInfo}>Alina Pereyra</p>
          </Col>
          <Col>
            <img
              src={juliathomson}
              alt="julia thomson"
              className={styles.memberImg}
            />
            <p className={styles.memberInfo}>Julia Thomson</p>
          </Col>
          <Col>
            <img
              src={justinyehuda}
              alt="justin yedhua"
              className={styles.memberImg}
            />
            <p className={styles.memberInfo}>Justin Yehuda</p>
          </Col>
        </Row>

        <Row className="row mt-5">
          <Col>
            <img
              src={juliakwak}
              alt="julia kwak"
              className={styles.memberImg}
            />
            <p className={styles.memberInfo}>Julia Kwak</p>
          </Col>
          <Col>
            <img
              src={juliaisko}
              alt="julia isko"
              className={styles.memberImg}
            />
            <p className={styles.memberInfo}>Julia Isko</p>
          </Col>
          <Col>
            <img src={alicehou} alt="alice hou" className={styles.memberImg} />
            <p className={styles.memberInfo}>Justin Yehuda</p>
          </Col>
        </Row>
        <Row className="row mt-5">
          <Col>
            <img
              src={andreathia}
              alt="andrea thia"
              className={styles.memberImg}
            />
            <p className={styles.memberInfo}>Andrea Thia</p>
          </Col>
          <Col>
            <img
              src={paulinaklubok}
              alt="paulina klubok"
              className={styles.memberImg}
            />
            <p className={styles.memberInfo}>Paulina Klubok</p>
          </Col>
          <Col>
            <img
              src={jakezajkowski}
              alt="jake zajkowski"
              className={styles.memberImg}
            />
            <p className={styles.memberInfo}>Jake Zajkowski</p>
          </Col>
        </Row>
        <Row className="row mt-5">
          <Col>
            <img
              src={jessischlewitt}
              alt="jessi schlewitt"
              className={styles.memberImg}
            />
            <p className={styles.memberInfo}>Jessi Schlewitt</p>
          </Col>
          <Col>
            <img
              src={lailarahbari}
              alt="laila rahbari"
              className={styles.memberImg}
            />
            <p className={styles.memberInfo}>Laila Rahbari</p>
          </Col>
          <Col>
            <img
              src={bridgetsantos}
              alt="bridget santos"
              className={styles.memberImg}
            />
            <p className={styles.memberInfo}>Bridget Santos</p>
          </Col>
        </Row>
        <Row className="row mt-5">
          <Col>
            <img
              src={andrewchoi}
              alt="andrew choi"
              className={styles.memberImg}
            />
            <p className={styles.memberInfo}>Andrew Choi</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
