import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { CopyRight } from "../../components/CopyRight";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../../validation";
import { IAuthLogin } from "../../interfaces";
import { login } from "../../redux/auth/auth.async";
import { useDispatch, useSelector } from "react-redux";
import { authLoadingSelector, tokenSelector } from "../../redux/auth/selector";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector(tokenSelector);
  const loading = useSelector(authLoadingSelector);
  token && history.push("/");

  const { handleSubmit, handleChange, touched, errors, values } = useFormik({
    initialValues: {
      identifier: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values: IAuthLogin) => {
      dispatch(login(values));
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="identifier"
            autoComplete="email"
            autoFocus
            value={values.identifier}
            error={touched.identifier && Boolean(errors.identifier)}
            helperText={touched.identifier && errors.identifier}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={values.password}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={loading}
          >
            Login
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/register">{"Don't have an account? Register"}</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <CopyRight />
      </Box>
    </Container>
  );
};
