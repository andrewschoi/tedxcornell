import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Alert from "react-bootstrap/Alert";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./styles.module.css";

import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

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

      <div className={styles.container}>
        <h1>Apply To Be Speaker</h1>
        <p>
          Do you have an idea worth spreading? The TEDxCornell stage is the
          perfect place to share it! Apply today to potentially get selected as
          a speaker for our next event!
        </p>
        <p>
          We recommend typing your answers in an external text editor and
          pasting your answers here.
        </p>
        <hr />

        <p className={styles.applyText}>Email</p>
        <TextField
          sx={{ width: "100%" }}
          placeholder="Your email"
          onChange={(e) =>
            setApp((prev) => {
              return {
                ...prev,
                email: e.target.value,
              };
            })
          }
        />

        <p className={styles.applyText}>Name</p>
        <TextField
          sx={{ width: "100%" }}
          placeholder="Your answer"
          onChange={(e) =>
            setApp((prev) => {
              return {
                ...prev,
                name: e.target.value,
              };
            })
          }
        />

        <p className={styles.applyText}>
          Location; if selected as a speaker, where would you likely be
          traveling from?
        </p>
        <TextField
          sx={{ width: "100%" }}
          placeholder="Your answer"
          onChange={(e) =>
            setApp((prev) => {
              return {
                ...prev,
                location: e.target.value,
              };
            })
          }
        />

        <p className={styles.applyText}>
          Tell us about yourself, i.e. your occupation, experience, etc. (250
          words max).
        </p>
        <TextField
          sx={{ width: "100%" }}
          placeholder="Your answer"
          onChange={(e) =>
            setApp((prev) => {
              return {
                ...prev,
                info: e.target.value,
              };
            })
          }
        />
        {appAlert ? (
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
          onClick={handleApply}
        >
          Apply
        </Button>
      </div>

      <div className={styles.container}>
        <h1>Nominate A Speaker</h1>
        <p>
          Know someone fanatastic that could be a good fit for TEDxCornell?
          Nominate them!
        </p>
        <p>
          We recommend typing your answers in an external text editor and
          pasting your answers here.
        </p>
        <hr />

        <p className={styles.applyText}>Email</p>
        <TextField
          sx={{ width: "100%" }}
          placeholder="Your email"
          onChange={(e) =>
            setNominate((prev) => {
              return {
                ...prev,
                email: e.target.value,
              };
            })
          }
        />

        <p className={styles.applyText}>Name</p>
        <TextField
          sx={{ width: "100%" }}
          placeholder="Your answer"
          onChange={(e) =>
            setNominate((prev) => {
              return {
                ...prev,
                name: e.target.value,
              };
            })
          }
        />

        <p className={styles.applyText}>
          Location; if selected as a speaker, where would they likely be
          traveling from?
        </p>
        <TextField
          sx={{ width: "100%" }}
          placeholder="Your answer"
          onChange={(e) =>
            setNominate((prev) => {
              return {
                ...prev,
                location: e.target.value,
              };
            })
          }
        />

        <p className={styles.applyText}>
          Tell us about them, i.e. their occupation, experience, etc. (250 words
          max).
        </p>
        <TextField
          sx={{ width: "100%" }}
          placeholder="Your answer"
          onChange={(e) =>
            setNominate((prev) => {
              return {
                ...prev,
                info: e.target.value,
              };
            })
          }
        />
        {nomAlert ? (
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
          onClick={handleNominate}
        >
          Nominate
        </Button>
      </div>

      <Footer />
    </React.Fragment>
  );
}
