import React from "react";
import "./Content.scss";
import profile from "./profile.jpeg";
import { INDUSTRIES, Form } from "./Form.js";

const Content = () => {
  return (
    <>
      <div className="Content" id="about">
        <div className="card-main">
          <h1>About CCAC</h1>
          <p>
            CCAC is an independent, non-profit organization that promotes
            economic and commercial cooperation between Central Asia and Canada.
          </p>
        </div>
        <div className="card box-shadow">
          <h2>Who we are</h2>
          <p>
            We are a group of professionals with extensive professional
            experience and a wide network of connections in all levels of
            government and professional organizations, large and small
            businesses and individuals both in Canada and Central Asian
            Countries.
          </p>
        </div>
        <div className="card box-shadow">
          <h2>Our Mission</h2>
          <p>
            Our mission is to promote mutually beneficial business relationships
            between Canada and Central Asian Countries.
          </p>
        </div>
        <div className="card box-shadow">
          <h2>Our vision</h2>
          <p>
            Our vision is to become a knowledge database and communication hub
            for all interested parties.
          </p>
        </div>
        <div className="card box-shadow">
          <h2>Leadership</h2>
          {/* <div style={{height:"5rem", width:"5rem", background:"url("+profile+")", borderRadius:"50%", backgroundSize:"contain", display:"inline-block", float:"left"}}></div> */}
          {/* <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}> */}
          <img
            src={profile}
            style={{
              height: "15rem",
              width: "15rem",
              borderRadius: "50%",
              marginRight: "2rem",
              float: "left",
              margin: "1rem",
            }}
            alt="Profile"
          />
          <p>
            Dimitri (DmZ) Zabarka is the Executive Director of the
            Canada-Central Asia Connections Association. He is also a founding
            partner of a consulting agency specializing in business intelligence
            and project management for companies involved in international
            business development.
          </p>
          {/* </div> */}
          <p>
            Prior to entering consulting practice, Dimitri spent more than 25
            years in the Energy and Natural Resources industry. He is a
            Certified Project Management Professional (PMP) and Professional
            Geoscientist with technical, leadership and business development
            experience in more than 2 dozen countries.
            <br></br>
            <br></br>
            Dimitri was born and raised in Kazakhstan and immigrated to Canada
            in 1999. He has a a deep connection with and understanding of both
            regions, providing him with the background to be an efficient
            facilitator of mutually beneficial relationships.
          </p>
        </div>
      </div>
      <div className="Content" id="services">
        <div className="card-main">
          <h1>Services and Industries</h1>
          <p>
            Whether you are Canadian or Central Asian corporation, partnership
            or other business organization, a public association, trust, or
            foundation, we will help you develop business opportunities and
            achieve your goals by providing a tailored approach to your entry
            strategy, business intelligence and SME support throughout the life
            of your project.
          </p>
        </div>
        <div className="split">
          <div>
            <h2>Services</h2>
            <ul>
              <li className="card box-shadow">
                <h2>Market Intelligence</h2>
              </li>
              <li className="card box-shadow">
                <h2>Opportunity Screening</h2>
              </li>
              <li className="card box-shadow">
                <h2>Preliminary Feasibility Study</h2>
              </li>
              <li className="card box-shadow">
                <h2>Partners Search</h2>
              </li>
              <li className="card box-shadow">
                <h2>SME Consultancy</h2>
              </li>
              <li className="card box-shadow">
                <h2>Entry Strategy Development</h2>
              </li>
              <li className="card box-shadow">
                <h2>Representation of your Company</h2>
              </li>
              <li className="card box-shadow">
                <h2>Project Consultancy</h2>
              </li>
            </ul>
          </div>
          <div>
            <h2>Industries</h2>
            <ul>
              {INDUSTRIES.map((industry) => (
                <li className="list card box-shadow">
                  <h2>{industry}</h2>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="Content" id="process">
        <div className="card-main">
          <h1>Our Process</h1>
        </div>
        <div className="card box-shadow">
          <h2>1. Expression of Interest</h2>
          <p>
            Should you be interested in working with us, please complete our EoI
            form. We will be in-touch with you
          </p>
        </div>
        <div className="card box-shadow">
          <h2>2. Interview</h2>
          <p>
            We discuss “what do you have to offer” and “what are your company's
            needs”
          </p>
        </div>
        <div className="card box-shadow">
          <h2>3. Preliminary Research</h2>
          <p>
            We conduct market research, opportunity screening, preliminary
            feasibility study, and contacts search
          </p>
        </div>
        <div className="card box-shadow">
          <h2>4. Project Development</h2>
          <p>
            We provide project management and SME consultancy, develop entry
            strategy, and faciliate representation of your company.
          </p>
        </div>
      </div>

      <div className="Content" id="contact">
        <div className="card-main">
          <h1>Contact Us</h1>
          <p>
            The first step is reaching out - we would be happy to connect with
            you to discuss your project, answer any questions you might have,
            and get you pointed in the right direction. <br /> <br />
            <b>Let's start a conversation!</b>
          </p>
        </div>
        <div className="card box-shadow">
          <h2>Expression of Interest Form</h2>
          <Form />
        </div>
      </div>
    </>
  );
};

export default Content;
