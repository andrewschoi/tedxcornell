import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "@mui/material/Button";
import styles from "./styles.module.css";

import andreathia from "../assets/andreathia.jpg";
import juliakwak from "../assets/juliakwak.jpg";
import juliaisko from "../assets/juliaisko.jpg";
import alicehou from "../assets/alicehou.jpg";
import justinyehuda from "../assets/justinyehuda.jpg";
import alinapereyra from "../assets/alinapereyra.jpg";
import jakezajkowski from "../assets/jakezajkowski.jpg";
import juliathomson from "../assets/juliathomson.jpg";
import jessischlewitt from "../assets/jessischlewitt.jpg";
import paulinakoubok from "../assets/paulinakoubok.jpg";
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
        <h1>Current Members</h1>
        <div style={{ flex: 1 }}></div>
      </div>

      <div className={styles.container}>
        <h1>Speaker Curation</h1>
      </div>

      <div className={styles.shrink}>
        <div className={styles.rowContainer}>
          <div className={styles.memberContainer}>
            <Card className="border-0">
              <Card.Img
                variant="top"
                src={alinapereyra}
                className={styles.memberPhoto}
              />
              <Card.Body className={styles.tint}>
                <Card.Title className={styles.memberName}>
                  Alina Pereyra
                </Card.Title>
                <Card.Text className={styles.memberText}>ILR 2023</Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className={styles.memberContainer}>
            <Card className="border-0">
              <Card.Img
                variant="top"
                src={jessischlewitt}
                className={styles.memberPhoto}
              />
              <Card.Body className={styles.tint}>
                <Card.Title className={styles.memberName}>
                  Jessi Schlewitt
                </Card.Title>
                <Card.Text className={styles.memberText}>HBHS 2024</Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className={styles.memberContainer}>
            <Card className="border-0">
              <Card.Img
                variant="top"
                src={jakezajkowski}
                className={styles.memberPhoto}
              />
              <Card.Body className={styles.tint}>
                <Card.Title className={styles.memberName}>
                  Jake Zajkowski
                </Card.Title>
                <Card.Text className={styles.memberText}>
                  Plant Sciences 2026
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className={styles.rowContainer}>
          <div className={styles.memberContainer}>
            <Card className="border-0">
              <Card.Img
                variant="top"
                src={juliakwak}
                className={styles.memberPhoto}
              />
              <Card.Body className={styles.tint}>
                <Card.Title className={styles.memberName}>
                  Julia Kwak
                </Card.Title>
                <Card.Text className={styles.memberText}>AEM 2025</Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className={styles.memberContainer}>
            <Card className="border-0">
              <Card.Img
                variant="top"
                src={paulinakoubok}
                className={styles.memberPhoto}
              />
              <Card.Body className={styles.tint}>
                <Card.Title className={styles.memberName}>
                  Paulina Klubok
                </Card.Title>
                <Card.Text className={styles.memberText}>ILR 2023</Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className={styles.memberContainer}>
            <Card className="border-0">
              <Card.Img
                variant="top"
                src={justinyehuda}
                className={styles.memberPhoto}
              />
              <Card.Body className={styles.tint}>
                <Card.Title className={styles.memberName}>
                  Justin Yehuda
                </Card.Title>
                <Card.Text className={styles.memberText}>ILR 2023</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <h1>Finance</h1>
      </div>

      <div className={styles.team}>
        <div className={styles.memberContainer}>
          <Card className="border-0">
            <Card.Img variant="top" src="" height="250px" width="200px" />
            <Card.Body className={styles.tint}>
              <Card.Title className={styles.memberName}>Sam Straus</Card.Title>
              <Card.Text className={styles.memberText}>AEM 2024</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className={styles.memberContainer}>
          <Card className="border-0">
            <Card.Img
              variant="top"
              src={andreathia}
              className={styles.memberPhoto}
            />
            <Card.Body className={styles.tint}>
              <Card.Title className={styles.memberName}>Andrea Thia</Card.Title>
              <Card.Text className={styles.memberText}>AEM 2026</Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className={styles.memberContainer}>
          <Card className="border-0">
            <Card.Img
              variant="top"
              src={juliathomson}
              className={styles.memberPhoto}
            />
            <Card.Body className={styles.tint}>
              <Card.Title className={styles.memberName}>
                Julia Thomson
              </Card.Title>
              <Card.Text className={styles.memberText}>AEM 2023</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className={styles.container}>
        <h1>Design</h1>
      </div>

      <div className={styles.team}>
        <div className={styles.memberContainer}>
          <Card className="border-0">
            <Card.Img variant="top" src="" height="250px" width="200px" />
            <Card.Body className={styles.tint}>
              <Card.Title className={styles.memberName}>
                Samantha Ivey
              </Card.Title>
              <Card.Text className={styles.memberText}>ILR 2024</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className={styles.memberContainer}>
          <Card className="border-0">
            <Card.Img
              variant="top"
              src={alicehou}
              className={styles.memberPhoto}
            />
            <Card.Body className={styles.tint}>
              <Card.Title className={styles.memberName}>Alice Hou</Card.Title>
              <Card.Text className={styles.memberText}>AAP 2026</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className={styles.container}>
        <h1>Marketing</h1>
      </div>

      <div className={styles.team}>
        <div className={styles.memberContainer}>
          <Card className="border-0">
            <Card.Img
              variant="top"
              src={juliaisko}
              className={styles.memberPhoto}
            />
            <Card.Body className={styles.tint}>
              <Card.Title className={styles.memberName}>Julia Isko</Card.Title>
              <Card.Text className={styles.memberText}>2025</Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className={styles.memberContainer}>
          <Card className="border-0">
            <Card.Img
              variant="top"
              src={bridgetsantos}
              className={styles.memberPhoto}
            />
            <Card.Body className={styles.tint}>
              <Card.Title className={styles.memberName}>
                Bridget Santos
              </Card.Title>
              <Card.Text className={styles.memberText}>
                Info. Science 2025
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className={styles.memberContainer}>
          <Card className="border-0">
            <Card.Img
              variant="top"
              src={lailarahbari}
              className={styles.memberPhoto}
            />
            <Card.Body className={styles.tint}>
              <Card.Title className={styles.memberName}>
                Laila Rahbari
              </Card.Title>
              <Card.Text className={styles.memberText}>ILR 2025</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className={styles.container}>
        <h1>Software</h1>
      </div>

      <div className={styles.team}>
        <div className={styles.memberContainer}>
          <Card className="border-0">
            <Card.Img variant="top" src="" height="250px" width="200px" />
            <Card.Body className={styles.tint}>
              <Card.Title className={styles.memberName}>
                Arnav Parashar
              </Card.Title>
              <Card.Text className={styles.memberText}>CS 2024</Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className={styles.memberContainer}>
          <Card className={`border-0`}>
            <Card.Img
              variant="top"
              src={andrewchoi}
              className={styles.memberPhoto}
            />
            <Card.Body className={styles.tint}>
              <Card.Title className={styles.memberName}>Andrew Choi</Card.Title>
              <Card.Text className={styles.memberText}>CS 2025</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}
