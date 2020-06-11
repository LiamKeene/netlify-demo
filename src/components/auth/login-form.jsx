import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Container, TextField, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

export default function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        {props.data && <Alert severity="warning">{props.data.hello}</Alert>}
        <form noValidate>
          <TextField
            autoComplete="email"
            autoFocus
            fullWidth
            id="email"
            label="Email Address"
            margin="normal"
            name="email"
            onChange={({ target }) => setEmail(target.value)}
            required
            variant="outlined"
          />
          <TextField
            autoComplete="current-password"
            fullWidth
            id="password"
            label="Password"
            margin="normal"
            name="password"
            onChange={({ target }) => setPassword(target.value)}
            required
            type="password"
            variant="outlined"
          />
          <Button
            color="primary"
            disabled={props.loading}
            fullWidth
            onClick={onSubmit}
            type="submit"
            variant="contained"
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );

  function onSubmit() {
    return props.onSubmit({
      variables: {
        email,
        password,
      },
    });
  }
}

LoginForm.propTypes = {
  errors: PropTypes.string,
  loading: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};
