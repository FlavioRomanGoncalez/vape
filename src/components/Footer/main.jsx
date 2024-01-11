// STYLE
import styles from "./main.module.css";

// ICONS
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>CONTACT US</h2>

      <ul className={styles.social_newtork}>
        <li>
          <FaTiktok style={{ color: "#fff" }} />
        </li>
        <li>
          <FaTwitter style={{ color: "#fff" }} />
        </li>
        <li>
          <FaFacebook style={{ color: "#fff" }} />
        </li>
        <li>
          <RiInstagramFill style={{ color: "#fff" }} />
        </li>
      </ul>

      <h3 className={styles.title}>
        Copyright © 2024 LAMBORHINI. All rights reserved.
      </h3>

      <ul className={styles.lists}>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
      </ul>

      <p>
        <strong>WARNING:</strong> This product can expose you to chemicals
        including formaldehyde, which is known to the State of California to
        cause cancer, and nicotine, which is known to the State of California to
        cause birth defects or other reproductive harm.
      </p>
    </section>
  );
}
