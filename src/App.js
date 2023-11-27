import React, { useContext, useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import UserProvider from "./context/user.provider";

import Navbar2 from "./components/admin/Navbar2";
import Header2 from "./components/admin/Header2";
import Dashboard from "./pages/admin/AdminNavbar/Dashboard";
import NavigationBar from "./pages/admin/AdminNavbar/NavigationBar";
import Announcements from "./pages/admin/AdminNavbar/Announcements";
import PersonalisedGroupFacilitation from "./pages/admin/AdminNavbar/PersonalisedGroupFacilitation";
import InternationalCompetitionHub from "./pages/admin/AdminNavbar/International_Competition_Hub";
import BridgeTheGapProgram from "./pages/admin/AdminNavbar/Bridge_The_Gap_Program";
import SuccessStories from "./pages/admin/AdminNavbar/SuccessStories";
import Registration from "./pages/admin/AdminNavbar/Registration";
import AboutUs from "./pages/admin/AdminNavbar/AboutUs";
import Contact from "./pages/admin/AdminNavbar/Contact";
import WhyUs from "./pages/admin/AdminNavbar/WhyUs";
import Settings from "./pages/admin/AdminNavbar/Settings";
import Footer from "./pages/admin/AdminNavbar/Footer";
import Content from "./pages/admin/AdminNavbar/Content";

// import UserDashboard from './pages/user/UserDashboard.jsx'

import StudNavbar from "./components/student/StudNavbar";
import Homepage from "./pages/studentNavbar/Homepage";
import Courses from "./pages/studentNavbar/Courses";
import SuccessStories2 from "./pages/studentNavbar/SuccessStories";
import AboutUs2 from "./pages/studentNavbar/AboutUs";
import Contact2 from "./pages/studentNavbar/Contact";
import SignUp from "./pages/studentNavbar/SignUp";
import VerticalLinearStepper from "./components/student/VerticalLinearStepper";
import UserContext from "./context/user.context";
// import Home from "./pages/user/Home";
// import VerticalLinearStepper from "./components/student/VerticalLinearStepper";
// import AcademicInfo from "./pages/studentRegistration/AcademicInfo";
// import InvoiceBill from "./pages/studentRegistration/InvoiceBill";
// import PaymentMethod from "./pages/studentRegistration/PaymentMethod";
// import PersonalInfo from "./pages/studentRegistration/PersonalInfo";

function App() {
  // const { isLogin } = useContext(UserContext);
  return (
    <>
      {/* <UserProvider> */}
      {/* <BrowserRouter> */}
      <Navbar2 />
      <Header2 />
      <Content>
        <Routes>
          {/* <Route path="/" element={isLogin ? <Header2 /> : <StudNavbar />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/success_story" element={<SuccessStories />} />
        <Route path="/registration" element={<VerticalLinearStepper />} />
        <Route path="/about-us" element={<AboutUs2 />} />
        <Route path="/contact" element={<Contact2 />} />
        <Route path="/sign-in" element={<SignUp />} /> */}

          <Route path="/admin" element={<Dashboard />} />
          <Route path="navigationBar" element={<NavigationBar />} />
          <Route path="announcements" element={<Announcements />} />
          <Route
            path="personalised"
            element={<PersonalisedGroupFacilitation />}
          />
          <Route
            path="international"
            element={<InternationalCompetitionHub />}
          />
          <Route path="bridge" element={<BridgeTheGapProgram />} />
          <Route path="successstories" element={<SuccessStories2 />} />
          <Route path="registration" element={<Registration />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contactus" element={<Contact />} />
          <Route path="whyus" element={<WhyUs />} />
          <Route path="setting" element={<Settings />} />
          <Route path="footer" element={<Footer />} />

        </Routes>
      </Content>
      {/* </BrowserRouter> */}
      {/* </UserProvider> */}
    </>
  );
}

export default App;
