import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "../components/common/Header";
import { HomePage } from '../pages/HomePage';
import { Footer } from '../components/common/Footer';
import { AboutUs } from "../pages/AboutUs";
import { Properties } from "../pages/Properties"
import { Services } from "../pages/Services"
import { Contacts } from '../pages/Contacts';
import { NotFoundPage } from '../pages/NotFoundPage';
import { PropertyPage } from '../pages/PropertyPage';

const enum Paths {
    Home = '/',
    AboutUs = '/about-us',
    Properties = '/properties',
    PropertyPage = "/id",
    Services = '/services',
    Contacts = '/contacts',
    NotFoundPage = '*'
}

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <>{children}</>;
};

const CommonLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <React.Fragment>
        <Header />
        {children}
        <Footer />
    </React.Fragment>
);

const router = createBrowserRouter([
    {
        path: Paths.Home,
        element: (
            <ProtectedRoute>
                <CommonLayout>
                    <HomePage />
                </CommonLayout>
            </ProtectedRoute>
        ),
    },
    {
        path: Paths.AboutUs,
        element: (
            <ProtectedRoute>
                <CommonLayout>
                    <AboutUs />
                </CommonLayout>
            </ProtectedRoute>
        ),
    },
    {
        path: Paths.Properties,
        element: (
            <ProtectedRoute>
                <CommonLayout>
                    <Properties />
                </CommonLayout>
            </ProtectedRoute>
        ),
    },
    {
        path: Paths.PropertyPage,
        element: (
            <ProtectedRoute>
                <CommonLayout>
                    <PropertyPage />
                </CommonLayout>
            </ProtectedRoute>
        ),
    },
    {
        path: Paths.Services,
        element: (
            <ProtectedRoute>
                <CommonLayout>
                    <Services />
                </CommonLayout>
            </ProtectedRoute>
        ),
    },
    {
        path: Paths.Contacts,
        element: (
            <ProtectedRoute>
                <CommonLayout>
                    <Contacts />
                </CommonLayout>
            </ProtectedRoute>
        ),
    },
    {
        path: Paths.NotFoundPage,
        element: (
            <ProtectedRoute>
                <CommonLayout>
                    <NotFoundPage />
                </CommonLayout>
            </ProtectedRoute>
        ),
    },
]);

export const AppRoutes: React.FC = () => <RouterProvider router={router} />;


// import React from 'react';
// import { useEffect } from "react";
// import { Route, BrowserRouter as Router, Routes, useLocation, useNavigate } from "react-router-dom";
// import { HomePage } from '../pages/HomePage';
// import { AboutUs } from "../pages/AboutUs";
// import { Properties } from "../pages/Properties"
// import { Services } from "../pages/Services"
// import { Contacts } from '../pages/Contacts';
// import { NotFoundPage } from '../pages/NotFoundPage';
// import { PropertyPage } from '../pages/PropertyPage';
// import { Header } from '../components/common/Header';
// import { Footer } from '../components/common/Footer';

// interface PageComponents {
//     Home: React.FC;
//     AboutUs: React.FC;
//     Properties: React.FC;
//     PropertyPage: React.FC;
//     Services: React.FC;
//     Contacts: React.FC;
//     NotFoundPage: React.FC;
// }

// const RedirectHandler: React.FC = () => {
//     const location = useLocation();
//     const navigate = useNavigate();

//     useEffect(() => {
//         const queryParams = new URLSearchParams(location.search);
//         const redirect = queryParams.get("redirect");
//         if (redirect) {
//             navigate(redirect);
//         }
//     }, [location, navigate]);

//     return null;
// };

// export const AppRoutes: React.FC = () => {
//     const pageComponents: PageComponents = {
//         Home: HomePage,
//         AboutUs: AboutUs,
//         Properties: Properties,
//         PropertyPage: PropertyPage,
//         Services: Services,
//         Contacts: Contacts,
//         NotFoundPage: NotFoundPage
//     };

//     return (
//         <Router>
//             <RedirectHandler />
//             <Header />
//             <Routes>
//                 <Route path="/estateIn/" element={<pageComponents.Home />} />
//                 <Route path="/estateIn/about-us" element={<pageComponents.AboutUs />} />
//                 <Route path="/estateIn/properties" element={<pageComponents.Properties />} />
//                 <Route path="/estateIn/id" element={<pageComponents.PropertyPage />} />
//                 <Route path="/estateIn/services" element={<pageComponents.Services />} />
//                 <Route path="/estateIn/contacts" element={<pageComponents.Contacts />} />
//                 <Route path="*" element={<pageComponents.NotFoundPage />} />
//             </Routes>
//             <Footer />
//         </Router>
//     );
// };

// export default AppRoutes;
