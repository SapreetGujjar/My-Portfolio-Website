import React from "react";
import Header from "../components/Header";

const Education = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
    

        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">I.K. GUJRAL PUNJAB TECHNICAL UNIVERSITY, JALANDHAR</h3>
                <div class="subheading mb-3">Bachelor's Computer Application</div>
                <div></div>
                <p>GPA: </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">Finel Year Student</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0"></h3>
                <div class="subheading mb-3"></div>
                <p></p>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Education;
