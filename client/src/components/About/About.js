import React from "react";
import "./About.css";
import person from "../../images/person.png";
const About = () => {
  return (
    <>
      <div className=" container about">
        <div className="row">
          <div className="col-md-6">
            <div className="about_header">
              <h1>Want to Know more</h1>
            </div>
            <div className="about_content">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
                illum optio amet molestias quae culpa recusandae possimus ea totam
                dolorum.
              </p>
            </div>
            <div className="about_iconlist">
              <div>
                <i class="far fa-lightbulb"> </i>
                <span className="m-3">Create ideas</span>
              </div>
              <div>
                <i class="fas fa-language"></i>
                <span className="m-3">Learn Languages</span>
              </div>
              <div>
                <i class="fas fa-drafting-compass"></i>
                <span className="m-3">Draw Picture</span>
              </div>
              <div>
                <i class="fab fa-wpexplorer"></i>
                <span className="m-3">Explore Something new</span>
              </div>
            </div>
            <div>
              <button className="btn about_button">More About us</button>
            </div>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={person} alt="person" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
