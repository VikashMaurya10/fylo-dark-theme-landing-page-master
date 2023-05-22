import React from "react";
import Testimonial from "../components/Testimonial";

import access from "../../assets/images/icon-access-anywhere.svg";
import security from "../../assets/images/icon-security.svg";
import collaboration from "../../assets/images/icon-collaboration.svg";
import file from "../../assets/images/icon-any-file.svg";

const TestimonialSection = () => {
  return (
    <section className="testmonialSection">
      <div className="setWidth">
        <div className="testmonials">
          <Testimonial
            title="Access your files, anywhere"
            imgSrc={access}
            para="The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere."
          />
          <Testimonial
            title="Security you can trust"
            imgSrc={security}
            para="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
          />
          <Testimonial
            title="Real-time collaboration"
            imgSrc={collaboration}
            para="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
          />
          <Testimonial
            title="Store any type of file"
            imgSrc={file}
            para=" Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
