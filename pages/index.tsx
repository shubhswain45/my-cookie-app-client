
import { useSetCookie } from "@/hooks";



const HomePage = () => {

  const { mutateAsync: setCookie } = useSetCookie()

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
