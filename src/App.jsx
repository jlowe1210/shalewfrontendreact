import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import { photoQuery } from "./main";
import { useLocation } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

function App() {
  const { pathname } = useLocation();

  useQuery(photoQuery("weddings"));
  useQuery(photoQuery("birthdays"));
  useQuery(photoQuery("sweet16"));
  useQuery(photoQuery("kidevents"));
  useQuery(photoQuery("babyshowers"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <NavBar />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}

export default App;
