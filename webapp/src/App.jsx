import Webapp from "./components/Webapp";
import { QueryClient,QueryClientProvider } from "react-query";
import { toast } from "react-toastify";

const queryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5000,
      cacheTime: 5000,
      refetchOnMount: false, //"always",
      refetchOnWindowFocus: false, //"always",
      refetchOnReconnect: false, //"always",
      refetchInterval: 3600000, // 1 hour
      refetchIntervalInBackground: false,
      suspense: false,
      setTimeout: 0,
      onError: (error) => {
        if (error instanceof Error) {
          if(error.message.includes("470")){
            //don't show any toast.
            if(error.response.data.message === "Compliance error"){
              //do nothing
            }
          }else{
            toast.error(`Something went wrong: ${error?.message}`);
          }
        } else {
          toast.error("Something went wrong!");
        }
      },   
    },
    mutations: {
      retry: 1,
      onError: (error) =>
        toast.error(`Something went wrong: ${error.message}`),
    }
  }
};

const queryClient = new QueryClient(queryClientConfig);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
  <Webapp/>
  </QueryClientProvider>
  );
}

export default App;
