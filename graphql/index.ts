import { graphql } from "@/gql";

export const setCookieMutation = graphql(`#graphql
    mutation SetCookie($username: String!, $userId: String!) {
  setCookie(username: $username, userId: $userId)
}
`)

export const currentUserQuery = graphql(`#graphql
    query Query {
  currentUser
}
`)