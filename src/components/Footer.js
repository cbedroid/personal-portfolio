import React from "react";

const Footer = () => {
  return (
    <footer>
      <section className="bg-gray-600 border-t border-red-600">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="header">
            <h2 className="text-4xl font-bold text-white border-b-4 border-blue-600 w-4/5 lg:w-1/5 pb-2">Stay Connected!</h2>
          </div>
          <div className="contact-links flex flex-col lg:flex-row justify-between c space-y-6 text-gray-100 p-4 my-4 md:mt-16 ">
            <a href="linkedin.com/in/cornelius-brooks" target="_blank" className="btn contact-details" rel="noreferrer">
              <i className="fab fa-linkedin"></i> Linkedin
            </a>
            <a id="profile-link" href="https://github.com/cbedroid" target="_blank" className="btn contact-details" rel="noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://twitter.com/cbedroid" target="_blank" className="btn contact-details" rel="noreferrer">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="mailto:cbedroid1614@gmail.com" className="btn contact-details">
              <i className="fas fa-at"></i> Send a mail
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
