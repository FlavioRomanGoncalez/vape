// FORMIK
import { useFormik } from "formik";

// MATERIAL UI
import { Grid } from "@mui/material";

// STYLE
import styles from "./main.module.css";

// COMPONENT
import TextFieldComponet from "../Elements/TextFieldComponte";

// IMAGE
import logo from "../../assets/lamborghini_text_logo_white.png";

// INITIALVALUES / VALIDATIONS
import { initialValues, validationSchema } from "./validations";

export default function Login() {
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

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
          <form onSubmit={formik.handleSubmit} className={`${styles.form}`}>
            <h1
              className={`${styles.title} "animate__animated animate__fadeInDown"`}
            >
              Login In
            </h1>
            <TextFieldComponet
              type="email"
              name="email"
              label="EMAIL"
              formik={formik}
              variant="standard"
              className="animate__animated animate__fadeInUp"
              placeholder="Enter your email"
            />
            <TextFieldComponet
              type="password"
              name="password"
              label="PASSWORD"
              formik={formik}
              variant="standard"
              className="animate__animated animate__fadeInUp"
              placeholder="Enter your password"
            />
            <button
              type="submit"
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
