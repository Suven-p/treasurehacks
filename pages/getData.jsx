import { useContext, useEffect } from "react";
import { auth } from "../firebase";
import { AuthContextProvider, AuthContext } from "../context/AuthContext";

import React from "react";

const page = () => {
  return (
    <AuthContextProvider>
      <GetData />
    </AuthContextProvider>
  );
};
const GetData = () => {
  //   const user = auth.currentUser;
  const user = useContext(AuthContext);
  return (
    <div>
      <div>
        Current User:
        {JSON.stringify(user)}
      </div>
    </div>
  );
};

export default page;
