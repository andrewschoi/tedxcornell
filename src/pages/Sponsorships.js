import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "./styles.module.css";

export default function Sponsorships() {
  return (
    <React.Fragment>
      <Nav />
      <div className={styles.apply}>
        <div style={{ flex: 1 }}></div>
        <h1 style={{ color: "#FFFFFF" }}>
          Interested in partnering with us? Let's talk business.
        </h1>

        <div style={{ flex: 1 }}></div>
      </div>

      <Footer />
    </React.Fragment>
  );
}
