import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "../components/Header";
import { HomePage } from '../pages/HomePage';
import { Footer } from '../components/Footer';

const enum Paths {
    Home = '/',
}

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

const CommonLayout = ({ children }: { children: React.ReactNode }) => (
    <>
        {children}
    </>
);

const router = createBrowserRouter([
    {
        path: Paths.Home,
        element: (
            <ProtectedRoute>
                <CommonLayout>
                    <HomePage>
                        <Header/>
                    </HomePage>
                    <Footer/>
                </CommonLayout>
            </ProtectedRoute>
        ),
    },
]);

export const AppRoutes = () => <RouterProvider router={router} />;