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

      <div className={styles.container}>
        <h1>Sponsorship Tiers</h1>
        <hr />
        <h2>Platinum Sponsor $10,000</h2>
        <p>
          10 reserved tickets to main event <br />
          Large size logo on all publicity materials <br />
          Opportunity to raffle out products or benefits during event <br />
          Honorary mentions and access to global audience outreach
        </p>
        <h2>Gold Sponsor $5,000</h2>
        <p>
          8 reserved tickets to main event <br />
          Medium size logo all publicity material <br />
          Opportunity to raffle out products or benefits during event <br />
          Honorary mentions and access to global audience outreach
        </p>
        <h2>Silver Sponsor $3,500</h2>
        <p>
          5 reserved tickets to main event <br />
          Medium size logo on all publicity materials <br />
          Opportunity to raffle out products or benefits during event
        </p>
        <h2>Bronze Sponsor $1,000</h2>
        <p>
          3 reserved tickets to main event <br />
          Small size logo on all publicity materials <br />
          Opportunity to raffle out products or benefits during event
        </p>
      </div>

      <Footer />
    </React.Fragment>
  );
}
