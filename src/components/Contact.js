import React, { useState, createRef } from "react";
import emailjs from "@emailjs/browser";
import GoogleRecaptcha from "./subcomponents/GoogleRecaptcha";
import ThankYouModal from "./ThankYouModal";
const _ = require("lodash");

const Contact = () => {
  const [values, setValues] = useState({});
  const [isOpen, toggleModal] = useState(false);
  const recaptchaRef = createRef(null);

  const sendMessage = (e) => {
    e.preventDefault();
    const form = e.target;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const recaptchaStatus = recaptchaRef.current.getVerifyStatus();

    if (!values || !userID || !serviceID || !templateID || !recaptchaStatus) return;

    // Send email message
    emailjs.init(userID);
    emailjs.send(serviceID, templateID, values);

    // reset form values
    form.reset();
    setValues({});

    toggleModal(true);
  };

  const handleChangeValue = (e) => {
    const value = e.target?.value;
    if (!value) return;
    setValues({ ...values, ...{ [e.target.name]: value.trim() } });
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-purple-600 to-indigo-700 h-full w-full">
      <div>
        <div className="md:px-20 px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-5xl text-white font-bold border-b-2 border-white w-34"> Contact</h1>
            </div>
          </div>
        </div>
        <form className="w-full flex items-center justify-center my-12" onSubmit={sendMessage}>
          <div className="top-40 bg-white shadow rounded py-12 lg:px-28 px-8">
            <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Let’s Work Together!</p>
            <div className="md:flex items-center mt-12">
              <div className="md:w-72 flex flex-col">
                <label className="text-base font-semibold leading-none text-gray-800" htmlFor="from_name">
                  Name
                </label>
                <input
                  tabIndex="0"
                  arial-label="Enter your name"
                  type="name"
                  name="from_name"
                  className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeHolder-gray-100"
                  placeHolder="Enter your name"
                  onChange={handleChangeValue}
                  minLength="3"
                  maxLength="40"
                  required
                />
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-800" htmlFor="from_email">
                  Email Address
                </label>
                <input
                  tabIndex="0"
                  arial-label="Enter your email address"
                  type="name"
                  name="from_email"
                  className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeHolder-gray-100"
                  placeHolder="Enter your email address"
                  onChange={handleChangeValue}
                  required
                />
              </div>
            </div>
            <div className="md:flex items-center mt-8">
              <div className="md:w-72 flex flex-col">
                <label className="text-base font-semibold leading-none text-gray-800" htmlFor="company">
                  Company name
                </label>
                <input
                  tabIndex="0"
                  roles="input"
                  arial-label="Enter your company name"
                  type="name"
                  name="company"
                  className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeHolder-gray-100"
                  placeHolder="Enter your company name"
                  minLength="4"
                  maxLength="80"
                  onChange={handleChangeValue}
                />
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-800" htmlFor="country">
                  Country
                </label>
                <input
                  tabIndex="0"
                  arial-label="Enter your country name"
                  type="name"
                  name="country"
                  className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeHolder-gray-100"
                  placeHolder="Enter your country name"
                  onChange={handleChangeValue}
                />
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col mt-8">
                <label className="text-base font-semibold leading-none text-gray-800" htmlFor="message">
                  Message
                </label>
                <textarea
                  tabIndex="0"
                  aria-label="leave a message"
                  roles="textbox"
                  type="name"
                  name="message"
                  minLength="12"
                  maxLength="800"
                  className="h-36 text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeHolder-gray-100 resize-none"
                  placeHolder="Your message..."
                  onChange={handleChangeValue}
                  required
                ></textarea>
              </div>
            </div>
            <p className="text-xs leading-3 text-gray-600 mt-4">
              By clicking submit you agree to our terms of service, privacy policy and how we use data as stated
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full mt-4 md:mt-9 ">
              <input
                type="submit"
                className="order-last md:order-first text-base cursor cursor-pointer font-semibold leading-none text-white py-4 px-10 bg-indigo-700 disabled:opacity-40 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none w-full lg:w-1/4 "
                defaultValue="SUBMIT"
                disabled={_.isEmpty(values)}
              />
              <GoogleRecaptcha ref={recaptchaRef} />
            </div>
          </div>
        </form>
      </div>
      <ThankYouModal isOpen={isOpen} toggleModal={toggleModal} />
    </section>
  );
};

export default Contact;
