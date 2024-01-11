// STYLE
import styles from "./main.module.css";

// MATERIAL UI
import { Grid, TextField } from "@mui/material";

// IMAGE
import logo from "../../assets/lamborghini_text_logo_white.png";

export default function Login() {
  return (
    <main className={styles.container}>
      <Grid container>
        {/* ILUSTRATION */}
        <Grid
          item
          md={6}
          lg={6}
          className={`${styles.ilustration} animate__animated animate__fadeInRight`}
        >
          <img
            src={logo}
            alt="logo"
            className={`${styles.image} custom_fadeRight`}
          />
        </Grid>

        {/* FORM */}
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className={`${styles.content}`}
        >
          <form action="" className={`${styles.form}`}>
            <h1
              className={`${styles.title} "animate__animated animate__fadeInDown"`}
            >
              Login In
            </h1>
            <TextField
              type="email"
              label="EMAIL"
              variant="standard"
              className="animate__animated animate__fadeInUp"
              placeholder="Enter your email"
            />
            <TextField
              type="password"
              label="PASSWORD"
              variant="standard"
              className="animate__animated animate__fadeInUp "
              placeholder="Enter your password"
            />
            <button
              className={`${styles.btn} animate__animated animate__fadeInUp`}
            >
              Get started
            </button>
          </form>
        </Grid>
      </Grid>
    </main>
  );
}
