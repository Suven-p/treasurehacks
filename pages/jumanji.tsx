import React, { useContext } from "react";
import { VscCircleLargeOutline } from "react-icons/vsc";
import { getDoc, getDocsFromCache, doc } from "firebase/firestore";
import { firestore } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const jumanji = () => {
  const user = useContext(AuthContext);
  (async () => {
    if (!user || !user.user) return;
    const docRef = doc(firestore, "users", user.user.uid);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
  })();
  return (
    <div>
      <VscCircleLargeOutline className="color-amber-500" />
    </div>
  );
};

export default jumanji;
