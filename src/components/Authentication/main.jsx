// STYLES
import { Button, TextField } from "@mui/material";
import styles from "./main.module.css";

export default function Authentication() {
  return (
    <section id="authentication" className={styles.container}>
      <h1 className={styles.title}>AUTHENTICATION</h1>
      <h3 className={styles.subtitle}>
        CHECK TO SEE IF YOU HAVE AN AUTHENTIC BALI VAPE
      </h3>
      <form action="" className={styles.form}>
        <TextField
          sx={{ width: "100%" }}
          variant="standard"
          label="ENTER YOUR EMAIL"
        />
        <TextField
          sx={{ width: "100%" }}
          label="ENTER YOUR PRODUCT SKU CODE"
          variant="standard"
        />
        <Button type="button" sx={{ width: "100%" }} variant="outlined">
          CHECK
        </Button>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          eos architecto sint omnis soluta nam. Corporis porro possimus
          repudiandae ad!
        </p>
      </form>
    </section>
  );
}
