// pages/server.tsx

import { GetServerSideProps } from "next";
import { parse } from "cookie";
import { createGraphqlClient } from "@/client/api";
import { currentUserQuery } from "@/graphql";

type ServerProps = {
  currentUser: string;
  token: string | null;
};

const Server = ({ currentUser, token }: ServerProps) => {
  return (
    <div>
      <h1>{currentUser}</h1>
      <p>Token: {token ? token : "No token found"}</p>
    </div>
  );
};

// This function is called at request time on the server
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Access cookies from the request headers
  const cookies = context.req.headers.cookie || "";

  // Parse the cookies using the 'cookie' library
  const parsedCookies = parse(cookies);
  const token = parsedCookies["your_token_from_server"] || null;

  const graphqlClient = createGraphqlClient(token || "")
  const { currentUser } = await graphqlClient.request(currentUserQuery)

  console.log("currentUser", currentUser);
  
  // Return the data as props to the page
  return {
    props: { currentUser, token },
  };
};

export default Server;
