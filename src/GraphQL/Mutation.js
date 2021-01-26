import { gql } from "@apollo/client";

export const SIGN_UP_USER_MUTATION = gql`
  mutation signup(
    $name: String!
    $email: String!
    $password: String!
    $city: Int!
    $sex: String!
    $terms: Boolean!
  ) {
    signup(
        name: $name
        email: $email
        password: $password
        city: $city
        sex: $sex
        terms: $terms
    ) {
      id
    }
  }
`;