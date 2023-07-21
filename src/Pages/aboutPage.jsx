import React from "react";
import AboutMe from "../Components/AboutMe/AboutMe";
import Banner from "../Components/Banner/Banner";
import Container from "../Components/Container/Container";
import Footer from "../Components/Footer/Footer";
import Testimonials from "../Components/Testimonials/Testimonials";

const AboutPage = () => {
  return (
    <>
      <Banner page={"About"} />
      <Container>
        <AboutMe />
        <div style={{ margin: "20px auto", textAlign: "center" }}>
          <video
            width={"100%"}
            controls
            placeholder="https://static.wixstatic.com/media/6c0ded_c03c71aab7c6413ea2e853cdfe5d262f~mv2.png/v1/fill/w_120,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8CA60775-1D18-4A01-8B4C-39A6D18AE04B__PNG.png"
          >
            <source src="about.mp4" type="video/mp4" />
          </video>
        </div>
      </Container>
      <Testimonials />
    </>
  );
};

export default AboutPage;
