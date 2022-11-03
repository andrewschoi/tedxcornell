import { useNavigate } from "react-router-dom";
import styles from "../pages/styles.module.css";
import logo from "../assets/logo.png";

export default function Nav() {
  const navigate = useNavigate();

  return (
    <div className={styles.nav}>
      <img src={logo} alt="[logo]" className={styles.logo} />

      <div style={{ flex: 1 }}></div>
      <button
        className={`bg-white border-0 text-dark`}
        onClick={() => navigate("/")}
      >
        Home
      </button>
      <button
        className={`bg-white border-0 text-dark`}
        onClick={() => navigate("/our-story")}
      >
        Our Story
      </button>
      <button
        className={`bg-white border-0 text-dark`}
        onClick={() => navigate("/past-events")}
      >
        Past Events
      </button>
      <button
        className={`bg-white border-0 text-dark`}
        onClick={() => navigate("/apply")}
      >
        Apply
      </button>
      <button
        className={`bg-white border-0 text-dark`}
        onClick={() => navigate("/sponsorships")}
      >
        Sponsor Us
      </button>
      <button
        className={`bg-white border-0 text-dark`}
        onClick={() => navigate("/faq")}
      >
        FAQ
      </button>
    </div>
  );
}
