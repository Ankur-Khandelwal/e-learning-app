import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Nav from "/components/Nav";
import AllCourses from "/components/AllCourses";
import Footer from "/components/Footer";
import LoginForm from "/components/Login";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <LoginForm />
    {/* <Nav />
    <AllCourses />
    <Footer /> */}
  </StrictMode>
);
