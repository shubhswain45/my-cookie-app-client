import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useSetCookie } from "@/hooks";

type Data = {
  name: string;
};

const HomePage = () => {

  const { mutateAsync: setCookie, isPending } = useSetCookie()

  return (
   
      <div>
        <button onClick={async () => {
          await setCookie()
        }}>
          click me to set cookie
        </button>
      </div>
  );
};

export default HomePage;
