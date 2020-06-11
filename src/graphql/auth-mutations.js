import gql from "graphql-tag";

export const HELLO_MUTATION = gql`
  mutation HelloMutation {
    hello
  }
`;

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      user {
        id
        email
      }
      token
    }
  }
`;

export const LOGOUT_MUTATION = gql`
  mutation {
    logout(input: {}) {
      success
    }
  }
`;
