/** @format */

import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import "./styles.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__text-wrapper">
        <h1>Contact</h1>
        <div className="contact__text-wrapper__email">
          <HiOutlineMail /> pli80@mail.ccsf.edu
        </div>
      </div>
    </section>
  );
};
export default Contact;
