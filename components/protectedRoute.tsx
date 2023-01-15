import Router, { useRouter } from 'next/router';
import React, { PropsWithChildren, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import LoadingScreen from './loadingScreen';

const ProtectedRoute: React.FC<PropsWithChildren> = ({ children }) => {
    const data = useContext(AuthContext);
    const router = useRouter();
    if (data.isLoading) return <LoadingScreen />;
    if (!data.user) {
        router.push('/login');
    }
    return (
        <>{children}</>
    );
};

export default ProtectedRoute;
