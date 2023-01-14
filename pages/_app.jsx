import { AuthContextProvider } from "../context/AuthContext";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
