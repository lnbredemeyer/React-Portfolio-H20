import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Leah Bredemeyer</h2>
          <ul>
            <li>
            Director of Online Product and Website Management, Graphic Designer, PR Specialist, Writer, Photographer, and Website Editor
            </li>
          </ul>

          <p class="mt-5">
            <a href="https://www.linkedin.com/in/leah-bredemeyer-b16b6974/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="inkedIn"
              />
            </a>
          </p>

          <a
            href="https://github.com/lnbredemeyer/React-Portfolio-H20/blob/main/assets/LBredemeyer.pdf"
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
            Photoshop, InDesign, Lightroom, Excel, Terminal, Visual Studio Code, Insomnia, MongoDB, React, and much more.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
