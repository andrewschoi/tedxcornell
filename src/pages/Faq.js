import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Alert from "react-bootstrap/Alert";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./styles.module.css";

import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

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
      <div className={styles.container}>
        <h1>Our Events</h1>
        <hr />
        <h2>Can I help organize the event?</h2>
        <p>
          Our team is fully staffed this semester, but check back next semester!
          Look out for volunteer opportunities as another way to get involved.
        </p>

        <h2>When/Where is the event?</h2>
        <p>
          Our event is April 16th at Kennedy Hall, more information will be
          posted on our home page soon!
        </p>

        <h2>Who sponsors your event?</h2>
        <p>
          Our sponsors include different schools of Cornell, local businesses,
          and larger companies as well.
        </p>

        <h2>What can I get out of coming to a TEDx event?</h2>
        <p>
          You can learn, be inspired, and get a chance to engage with a
          community interested in discussing exciting new ideas.
        </p>

        <h2>Can anyone come to the event?</h2>
        <p>
          Yes! Stay tuned for more information on ticket sales for our April
          16th conference.
        </p>

        <h2>How can I register for the event?</h2>
        <p>
          Just buy tickets! Navigate to our home page and use our ticketing link
          to purchase tickets. If you have trouble doing so, shoot us an email
          and we'll help out.
        </p>

        <h2>Do the events have themes?</h2>
        <p>
          Yes! This year’s event theme is “Unmuted”. Past themes include
          “Reframe” and “Uproot”.
        </p>
      </div>

      <div className={styles.container}>
        <h1>About Us</h1>
        <hr />
        <h2>What is TED?</h2>
        <p>
          TED is a nonprofit devoted to spreading ideas, usually in the form of
          short, powerful talks. TED began in 1984 as a conference where
          Technology, Entertainment, and Design converged, and today covers
          almost all topics -- from science to business to global issues.
        </p>

        <h2>What is TEDx?</h2>
        <p>
          A TEDx event is a local gathering where live TED-like talks and videos
          previously recorded at TED conferences are shared with the community.
          TEDx events are fully planned and coordinated independently, on a
          community-by-community basis.
        </p>

        <h2>Who runs TEDxCornell?</h2>
        <p>
          Operating under an official license from TED, a group of student
          volunteers organize and host each TEDxCornelll event. For more
          information about the team, check out our Our Story page!
        </p>

        <h2>What can I expect at a TEDx event?</h2>
        <p>
          TEDx events are truly unique in that they bring together a diverse
          range of speakers and ideas together in one place in the span of a few
          hours. There’s no platform quite like it.
        </p>

        <h2>How many TEDxCornell conferences have been held so far?</h2>
        <p>
          We have held 5 total conferences. To learn more about the history of
          TEDxCornell, check out the Our Story page!
        </p>

        <h2>How are TEDx events sponsored?</h2>
        <p>
          We are a nonprofit organization sponsored by donations from companies,
          local businesses, and organizations within Cornell University.
        </p>
      </div>

      <div className={styles.container}>
        <h1>Getting Involved</h1>
        <hr />
        <h2>Can anyone apply to be a speaker?</h2>
        <p>
          Yes! We’re looking for individuals who believe that they have a story,
          idea, or passion worth sharing.
        </p>

        <h2>What roles are available on the organizing team?</h2>
        <p>
          Our organizers work on speaker curation, finance and sponsorship,
          design and marketing, website design, and more. Check back next
          semester to see what positions we’re looking for.
        </p>

        <h2>Are there other ways to get involved?</h2>
        <p>
          We often look for volunteers willing to help with tasks leading up to
          the event and on the day of the event. If you would like to meet the
          team and get a sense of what it’s like being on the organizing side of
          the event, keep an eye out for our volunteering opportunities.
        </p>

        <h2>Do you compensate speakers?</h2>
        <p>
          TEDx events are not allowed to pay speakers; however, we can cover
          travel and lodging for speakers outside of Ithaca. We do our best to
          provide all the support we can to our speakers!
        </p>
      </div>

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
