import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Card from "react-bootstrap/Card";
import styles from "./styles.module.css";

import uproot from "../assets/uproot.png";

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

      <div className={styles.event}>
        <div className={styles.row}>
          <div className={styles.halfScreen}>
            <h1>Unmuted</h1>
            <p>
              For the past two years, we have all had to sit behind our screens,
              attending meeting after meeting, unable to properly express our
              ideas and our stories. Join us and our speakers as we are at long
              last, finally able to become Unmuted.
            </p>
          </div>
          <img src={uproot} alt="[Unmuted logo]" className={styles.eventLogo} />
        </div>

        <hr />
      </div>

      <div className={styles.carousel}>
        <div className={styles.eventCard}>
          <Card className="border-0">
            <Card.Img variant="top" src="" className={styles.eventImage} />
            <Card.Body>
              <Card.Title className={styles.cardTitle}>
                You Are Your Best Audience
              </Card.Title>
              <Card.Text className={styles.cardSpeaker}>
                Matthew Dicks
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className={styles.eventCard}>
          <Card className="border-0">
            <Card.Img variant="top" src="" className={styles.eventImage} />
            <Card.Body>
              <Card.Title className={styles.cardTitle}>
                You Are More Than Your Resume
              </Card.Title>
              <Card.Text className={styles.cardSpeaker}>Raj Suchak</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className={styles.eventCard}>
          <Card className="border-0">
            <Card.Img variant="top" src="" className={styles.eventImage} />
            <Card.Body>
              <Card.Title className={styles.cardTitle}>
                The Power of Cultural Storytelling
              </Card.Title>
              <Card.Text className={styles.cardSpeaker}>
                Dydine Umunyana Anderson
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className={styles.carousel}>
        <div className={styles.eventCard}>
          <Card className="border-0">
            <Card.Img variant="top" src="" className={styles.eventImage} />
            <Card.Body>
              <Card.Title className={styles.cardTitle}>
                Save the World: Eat a Bug
              </Card.Title>
              <Card.Text className={styles.cardSpeaker}>
                Nathan Laurenz
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className={styles.eventCard}>
          <Card className="border-0">
            <Card.Img variant="top" src="" className={styles.eventImage} />
            <Card.Body>
              <Card.Title className={styles.cardTitle}>
                Your Love Stories
              </Card.Title>
              <Card.Text className={styles.cardSpeaker}>
                Karin Sternberg
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className={styles.eventCard}>
          <Card className="border-0">
            <Card.Img variant="top" src="" className={styles.eventImage} />
            <Card.Body>
              <Card.Title className={styles.cardTitle}>
                Accepting My Autism Diagnosis
              </Card.Title>
              <Card.Text className={styles.cardSpeaker}>
                Carson Taylor
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className={styles.event}>
        <div className={styles.row}>
          <div className={styles.halfScreen}>
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
          </div>
          <img
            src={uproot}
            alt="[Uprooted logo]"
            className={styles.eventLogo}
          />
        </div>

        <hr />
      </div>

      <div className={styles.carousel}>
        <div className={styles.eventCard}>
          <Card className="border-0">
            <Card.Img variant="top" src="" className={styles.eventImage} />
            <Card.Body>
              <Card.Title className={styles.cardTitle}>
                Democracy and Emerging Surveillance Technology
              </Card.Title>
              <Card.Text className={styles.cardSpeaker}>Ishan Sharma</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className={styles.eventCard}>
          <Card className="border-0">
            <Card.Img variant="top" src="" className={styles.eventImage} />
            <Card.Body>
              <Card.Title className={styles.cardTitle}>
                Stop Cancelling Yourself
              </Card.Title>
              <Card.Text className={styles.cardSpeaker}>Cat Hoke</Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className={styles.eventCard}>
          <Card className="border-0">
            <Card.Img variant="top" src="" className={styles.eventImage} />
            <Card.Body>
              <Card.Title className={styles.cardTitle}>
                How I Got Out of a Prison Gang
              </Card.Title>
              <Card.Text className={styles.cardSpeaker}>John Jackson</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className={styles.carousel}>
        <div className={styles.eventCard}>
          <Card className="border-0">
            <Card.Img variant="top" src="" className={styles.eventImage} />
            <Card.Body>
              <Card.Title className={styles.cardTitle}>
                The Healing Power of MDMA through Reconnection
              </Card.Title>
              <Card.Text className={styles.cardSpeaker}>
                Marcela Ot'Alora
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className={styles.eventCard}>
          <Card className="border-0">
            <Card.Img variant="top" src="" className={styles.eventImage} />
            <Card.Body>
              <Card.Title className={styles.cardTitle}>
                Why You Should Never Tell a Black Child They Act White
              </Card.Title>
              <Card.Text className={styles.cardSpeaker}>
                Daniel James II
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className={styles.eventCard}>
          <Card className="border-0">
            <Card.Img variant="top" src="" className={styles.eventImage} />
            <Card.Body>
              <Card.Title className={styles.cardTitle}>
                The American Dream is a Nightmare for Workers
              </Card.Title>
              <Card.Text className={styles.cardSpeaker}>
                Larry Williams Jr.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}
