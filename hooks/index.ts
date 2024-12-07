import { createGraphqlClient } from "@/client/api";
import { setCookieMutation } from "@/graphql";
import { useMutation } from "@tanstack/react-query";

// Custom hook to set cookie by calling GraphQL and API
export const useSetCookie = () => {
  return useMutation({
    mutationFn: async () => {
      try {
        const graphqlClient = createGraphqlClient();
        
        // Sending the request to the GraphQL mutation
        const { setCookie } = await graphqlClient.request(setCookieMutation, {
          userId: "123456789",
          username: "shubh",
        });

        // After successful mutation, send a request to the server-side API to set the cookie
        if (setCookie) {
          // You may choose to send any relevant data like userId or username to the API
          const res = await fetch("/api/hello", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              token: setCookie
            }),
          });

          if (!res.ok) {
            throw new Error("Failed to set the cookie on the server.");
          }

          // Return some useful data after success, such as a token if needed
          return true
        }

      } catch (error: any) {
        // Throw the error message for error handling
        throw new Error(error?.message || "Something went wrong");
      }
    },
    onSuccess: (response) => {
      // Handle the response if needed
      console.log("Cookie set successfully on the server:", response);
    },
    onError: (error) => {
      // Handle error if any
      console.error("Error setting cookie:", error);
    },
  });
};
