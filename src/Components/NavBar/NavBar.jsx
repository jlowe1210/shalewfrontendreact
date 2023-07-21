import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Container from "../Container/Container";
import styles from "./NavBar.module.css";

function NavBar() {
  const [mobileNavToggle, setMobileNavToggle] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (mobileNavToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [mobileNavToggle]);

  useEffect(() => {
    setMobileNavToggle(false);
  }, [location]);

  return (
    <>
      <div style={{ textAlign: "center", margin: "5px 0" }}>
        <img
          className={styles.logo}
          width="100px"
          height="100px"
          src="https://static.wixstatic.com/media/6c0ded_c03c71aab7c6413ea2e853cdfe5d262f~mv2.png/v1/fill/w_120,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8CA60775-1D18-4A01-8B4C-39A6D18AE04B__PNG.png"
        />
      </div>

      <nav className={`${styles.navbar}`}>
        <Container>
          <ul className={styles.navbar_link_container}>
            <div className={styles.desktop_nav}>
              <li>
                <NavLink
                  style={({ isActive, isPending }) => {
                    return {
                      textDecoration: "none",
                      color: isActive ? "#f1a3cb" : "black",
                    };
                  }}
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive, isPending }) => {
                    return {
                      textDecoration: "none",
                      color: isActive ? "#f1a3cb" : "black",
                    };
                  }}
                  to={"/about"}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive, isPending }) => {
                    return {
                      textDecoration: "none",
                      color: isActive ? "#f1a3cb" : "black",
                    };
                  }}
                  to={"/contact"}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive, isPending }) => {
                    return {
                      textDecoration: "none",
                      color: isActive ? "#f1a3cb" : "black",
                    };
                  }}
                  to={"/weddings"}
                >
                  Weddings
                </NavLink>
              </li>

              <li>
                <NavLink
                  style={({ isActive, isPending }) => {
                    return {
                      textDecoration: "none",
                      color: isActive ? "#f1a3cb" : "black",
                    };
                  }}
                  to={"/birthdays"}
                >
                  Birthdays
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive, isPending }) => {
                    return {
                      textDecoration: "none",
                      color: isActive ? "#f1a3cb" : "black",
                    };
                  }}
                  to={"/kidevents"}
                >
                  Kid events
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive, isPending }) => {
                    return {
                      textDecoration: "none",
                      color: isActive ? "#f1a3cb" : "black",
                    };
                  }}
                  to={"/babyshowers"}
                >
                  Baby showers
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive, isPending }) => {
                    return {
                      textDecoration: "none",
                      color: isActive ? "#f1a3cb" : "black",
                    };
                  }}
                  to={"/sweet16"}
                >
                  Sweet 16
                </NavLink>
              </li>
            </div>
          </ul>
        </Container>
        <div className={styles.mobile_nav_menu_container}>
          <p
            onClick={() => setMobileNavToggle(true)}
            className={styles.mobile_menu_btn}
          >
            Menu
            <img
              className={styles.hamburgericon}
              src="hamburgerIcon.png"
              alt="hamburger icon"
            />
          </p>
        </div>
        {mobileNavToggle ? (
          <div className={styles.mobile_nav_container}>
            <p
              onClick={() => setMobileNavToggle(false)}
              className={styles.close_btn}
            >
              X
            </p>
            <ul className={styles.mobile_nav}>
              <li>
                <NavLink
                  style={({ isActive, isPending }) => {
                    return {
                      textDecoration: "none",
                      color: isActive ? "#f1a3cb" : "black",
                    };
                  }}
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive, isPending }) => {
                    return {
                      textDecoration: "none",
                      color: isActive ? "#f1a3cb" : "black",
                    };
                  }}
                  to={"/about"}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive, isPending }) => {
                    return {
                      textDecoration: "none",
                      color: isActive ? "#f1a3cb" : "black",
                    };
                  }}
                  to={"/contact"}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive, isPending }) => {
                    return {
                      textDecoration: "none",
                      color: isActive ? "#f1a3cb" : "black",
                    };
                  }}
                  to={"/weddings"}
                >
                  Weddings
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive, isPending }) => {
                    return {
                      textDecoration: "none",
                      color: isActive ? "#f1a3cb" : "black",
                    };
                  }}
                  to={"/birthdays"}
                >
                  Birthdays
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive, isPending }) => {
                    return {
                      textDecoration: "none",
                      color: isActive ? "#f1a3cb" : "black",
                    };
                  }}
                  to={"/kidevents"}
                >
                  Kid events
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive, isPending }) => {
                    return {
                      textDecoration: "none",
                      color: isActive ? "#f1a3cb" : "black",
                    };
                  }}
                  to={"/babyshowers"}
                >
                  Baby showers
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive, isPending }) => {
                    return {
                      textDecoration: "none",
                      color: isActive ? "#f1a3cb" : "black",
                    };
                  }}
                  to={"/sweet16"}
                >
                  Sweet 16
                </NavLink>
              </li>
            </ul>
          </div>
        ) : null}
      </nav>
    </>
  );
}

export default NavBar;
