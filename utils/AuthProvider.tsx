import React, { createContext } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext({ loggedIn });
