import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              Sapreet
              <span class="text-primary"> Singh</span>
            </h1>
            <div class="subheading mb-5">
               (+91)90688-40972 ·
              <a href="sapreetsingh08@gmail.com">sapreetsingh08@gmail.com</a>
            </div>
            <p class="lead mb-5">
            To join a renowned Institution to enhance my skills and knowledge and to work
            for the growth of the Institution.
            </p>
            <div class="social-icons">
              <a class="social-icon" href="https://www.linkedin.com/in/sapreet-gujjar-669297211/">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="https://github.com/SapreetGujjar">
                <i class="fab fa-github"></i>
              </a>
              <a class="social-icon" href="https://twitter.com/SAPREET_GUJJAR_">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="social-icon" href="https://www.facebook.com/sapreet.singh">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;
