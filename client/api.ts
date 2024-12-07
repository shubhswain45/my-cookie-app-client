import { GraphQLClient } from "graphql-request";


export const createGraphqlClient = (token?: string) => {
    return new GraphQLClient('https://my-cookie-app-server.onrender.com/graphql', {
        credentials: "include",
        headers: () => ({
            Authorization: 
              `Bearer ${token}`
              
          }),
    });
}
