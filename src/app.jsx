import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { HELLO_MUTATION } from "graphql/auth-mutations";
import LoginForm from "components/auth/login-form";

export default function LoginContainer() {
  const [login, { loading, data, error }] = useMutation(HELLO_MUTATION);

  return (
    <LoginForm
      data={data}
      errors={error?.graphQLErrors}
      loading={loading}
      onSubmit={login}
    />
  );
}
