import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Button from "@mui/material/Button";
import Card from "react-bootstrap/Card";
import styles from "./styles.module.css";

export default function Landing() {
  return (
    <React.Fragment>
      <Nav />
      <div className={styles.apply}>
        <h3>Want to get involved with TEDxCornell?</h3>
        <h4>Learn more about our speaking and business opportunties.</h4>
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

      <div className={styles.featured}>
        <div className={styles.halfScreen}>
          <h2>Featured</h2>
          <h1>
            Fairness Through Algorithmic Thinking: Designing Better
            Congressional Districts and Elections
          </h1>
          <p>
            David Shmoys is a professor of operations research and computer
            science at Cornell, who is passionate about teaching the
            fundamentals of optimization modeling and algorithms to his
            students. In his research, he uses optimization models to help the
            world run better, in settings that range from improving the
            operations of Citibike, to long-term forestry planning to protect
            the red-cockaded woodpecker, an endangered species. In his
            TEDxCornell talk “Fairness Through Algorithmic Thinking: Designing
            Better Congressional Districts and Elections,” he will discuss
            optimization tools to create fairer congressional districts, as well
            as designing rules for this that are more resilient to partisan
            manipulation.{" "}
          </p>
        </div>

        <img src={""} alt="[David Schmoys]" />
      </div>

      <hr />

      <div className={styles.carousel}>
        <Card className="border-0">
          <Card.Img variant="top" src={""} height="300px" width="550px" />
          <Card.Body>
            <Card.Title className={styles.cardTitle}>
              You Are Your Best Audience
            </Card.Title>
            <Card.Text className={styles.cardSpeaker}>Matthew Dicks</Card.Text>
          </Card.Body>
        </Card>

        <Card className="border-0">
          <Card.Img variant="top" src="" height="300px" width="550px" />
          <Card.Body>
            <Card.Title className={styles.cardTitle}>
              You Are More Than Your Resume
            </Card.Title>
            <Card.Text className={styles.cardSpeaker}>Raj Suchak</Card.Text>
          </Card.Body>
        </Card>

        <Card className="border-0">
          <Card.Img variant="top" src="" height="300px" width="550px" />
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

      <div className={styles.interests}></div>

      <div className={styles.about}>
        <div className={styles.halfScreen}>
          <h2>About</h2>
          <p>
            TED is a nonpartisan nonprofit devoted to spreading ideas, usually
            in the form of short, powerful talks. TED began in 1984 as a
            conference where Technology, Entertainment and Design converged, and
            today covers almost all topics — from science to business to global
            issues — in more than 110 languages. Meanwhile, independently run
            TEDx events help share ideas in communities around the world.
          </p>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}
