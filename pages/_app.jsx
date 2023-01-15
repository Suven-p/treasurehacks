import { AuthContextProvider } from "../context/AuthContext";
import Router from "next/router";
import React from 'react';
import { Roboto } from "@next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ['100', '300', '400', '500', '700', '900',] });

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <div className={`${roboto.className}`}>
        <Component {...pageProps} />
      </div>
    </AuthContextProvider>
  );
}

export default MyApp;
