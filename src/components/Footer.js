import React from "react";
import { signInWithGoogle } from "../firebase-config";
import styles from "../pages/styles.module.css";

import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <img
        src={logo}
        alt="[logo]"
        height="100px"
        width="200px"
        className={styles.logo}
      />
      <div style={{ flex: 1 }}></div>
      <div className={styles.footerCol}>
        <h5>TEDxCornell</h5>
        <a href="our-story">
          <h6>Our Story</h6>
        </a>
        <a href="/faq">
          <h6>FAQ</h6>
        </a>
      </div>
      <div className={styles.footerCol}>
        <h5>Our Events</h5>
        <a href="/past-events">
          <h6>Past Events</h6>
        </a>
      </div>
      <div className={styles.footerCol}>
        <h5>Apply as a Speaker</h5>
        <a href="/apply">
          <h6>Apply</h6>
        </a>
        <a href="/apply">
          <h6>Nominate</h6>
        </a>
      </div>
      <div className={styles.footerCol}>
        <h5>Follow Us</h5>
        <a href="https://www.facebook.com/TEDxCornellUniversity/">
          <h6>Facebook</h6>
        </a>
        <a href="https://www.instagram.com/tedxcornell/">
          <h6>Instagram</h6>
        </a>
        <a href="https://www.linkedin.com/company/tedxcornell/about/">
          <h6>LinkedIn</h6>
        </a>
      </div>

      <a onClick={() => signInWithGoogle()}>
        <h6>Admin</h6>
      </a>
    </div>
  );
}
