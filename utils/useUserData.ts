import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { doc, getDocs, onSnapshot } from 'firebase/firestore';
import { firestore } from '../firebase';

const useUserData = () => {
    const authData = useContext(AuthContext);
    const [userData, setUserData] = React.useState({});

    React.useEffect(() => {
        if (authData.isLoading || !authData.user) return;
        const _doc = doc(firestore, "users", authData.user.uid);
        const unsub = onSnapshot(_doc, (doc) => {
            setUserData({ ...doc.data(), image: "https://avatars.githubusercontent.com/u/47562404?v=4" } || {});
        });
        return unsub;
    }, [authData]);
    return { isLoading: authData.isLoading, userData };
};

export default useUserData;
