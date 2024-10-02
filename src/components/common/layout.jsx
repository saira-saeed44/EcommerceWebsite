import React from "react";
import Footer from "../layout/footer";
import NavBar from "../layout/navBar";
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <NavBar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
