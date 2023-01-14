import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useUser = () => {
  //   const user = auth.currentUser;
  const user = useContext(AuthContext);
};
