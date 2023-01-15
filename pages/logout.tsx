import { useContext } from 'react';
import { useRouter } from "next/router";
import { AuthContext } from '../context/AuthContext';

const logout = () => {
    const userData = useContext(AuthContext);
    const router = useRouter();
    if (userData.isLoading) return <></>;
    userData.logout().then(() => {
        router.push("/homepage");
    });
    router.push('/homepage');
    console.log("Logging out...");
    return (
        <div>Logging out...</div>
    );
};

export default logout;
