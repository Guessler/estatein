import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "../components/common/Header";
import { HomePage } from '../pages/HomePage';
import { Footer } from '../components/common/Footer';
import { AboutUs } from "../pages/AboutUs";
import { Properties } from "../pages/Properties";
import { Services } from "../pages/Services";
import { Contacts } from '../pages/Contacts';
import { NotFoundPage } from '../pages/NotFoundPage';
import { PropertyPage } from '../pages/PropertyPage';

const enum Paths {
    Home = '/',
    AboutUs = '/about-us',
    Properties = '/properties',
    PropertyPage = "/properties/:id",
    Services = '/services',
    Contacts = '/contacts',
    NotFoundPage = '*'
}

const CommonLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
);

const router = createBrowserRouter([
    {
        path: Paths.Home,
        element: <CommonLayout><HomePage /></CommonLayout>,
    },
    {
        path: Paths.AboutUs,
        element: <CommonLayout><AboutUs /></CommonLayout>,
    },
    {
        path: Paths.Properties,
        element: <CommonLayout><Properties /></CommonLayout>,
    },
    {
        path: Paths.PropertyPage,
        element: <CommonLayout><PropertyPage /></CommonLayout>,
    },
    {
        path: Paths.Services,
        element: <CommonLayout><Services /></CommonLayout>,
    },
    {
        path: Paths.Contacts,
        element: <CommonLayout><Contacts /></CommonLayout>,
    },
    {
        path: Paths.NotFoundPage,
        element: <CommonLayout><NotFoundPage /></CommonLayout>,
    },
]);

export const AppRouter: React.FC = () => <RouterProvider router={router} />;

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

// export const AppRouter: React.FC = () => {
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
//         <>
//             <Router basename="/estateIn">
//                 <RedirectHandler />
//             <Header />
//                 <Routes>
//                     <Route path="/" element={<pageComponents.Home />} />
//                     <Route path="/about-us" element={<pageComponents.AboutUs />} />
//                     <Route path="/properties" element={<pageComponents.Properties />} />
//                     <Route path="/id" element={<pageComponents.PropertyPage />} />
//                     <Route path="/services" element={<pageComponents.Services />} />
//                     <Route path="/contacts" element={<pageComponents.Contacts />} />
//                     <Route path="*" element={<pageComponents.NotFoundPage />} />
//                 </Routes>
//             <Footer />
//             </Router>
//         </>
//     );
// };

// export default AppRouter;
