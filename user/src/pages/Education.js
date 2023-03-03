import React from "react";
import Header from "../components/Header";

const Education = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              
              <span class="text-primary">Uttam</span>
            </h1>
            <div class="subheading mb-5">
              Uprauth,Aurai SRN Bhadohi Utter Pradesh 221301·
              <a href="mailto:name@email.com">uttammind@email.com</a>
              <p>Mobile   No:  9140711276 ,  983860224</p>
            </div>
            <p class="lead mb-5">
              I am Fresher in React Js Front End Developer 
              To be part of an organization , where I can fully 
              Utilize my skills and make a significant contribution to
               The growth of the company.
              
            </p>
            <div class="social-icons">
              <a class="social-icon" href="#!">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="#!">
                <i class="fab fa-github"></i>
              </a>
              <a class="social-icon" href="#!">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="social-icon" href="#!">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">AKTU LUCKNOW</h3>
                <div class="subheading mb-3">B.Tech</div>
                <div>Information Technology - 4th Year</div>
                <p>percentage: 68%</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">Nov 2020 - Jun 2023</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">BTE UP LUCKNOW</h3>
                <div class="subheading mb-3">Diploma in Govt Poly Aurai SRN Bhadohi</div>
                <div>Information Technology</div>
                <p>percentage: 70%</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">AUG 2016- Nov 2016</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">S K M V I C Inter College Aurai SRN Bhadohi</h3>
                <div class="subheading mb-3">10 TH</div>
                <p>percentage: 79%</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">May 2016</span>
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
