import React, { useState } from "react";

import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import ContactForm from "contact/components/ContactForm";

import { ContactFormFields } from "../types";
import ThankYouModal from "./components/ThankYouModal";

const Contact = () => {
  const [isOpen, toggleModal] = useState(false);

  /* Send email message to EmailJs handler */
  const sendMessage = async (
    data: ContactFormFields,
  ): Promise<EmailJSResponseStatus | undefined> => {
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

    if (!userID || !serviceID || !templateID) return;

    emailjs.init(userID);
    const response = await emailjs.send(serviceID, templateID, data);

    // Only show `ThankModal` if email is successfully sent.
    toggleModal(response?.status === 200 ?? false);
    return response;
  };

  const onSubmit = (data: ContactFormFields) => {
    return sendMessage(data);
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-purple-600 to-indigo-700 h-full w-full"
    >
      <div>
        <div className="md:px-20 px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-5xl text-white font-bold border-b-2 border-white w-34">
                {" "}
                Contact
              </h1>
            </div>
          </div>
          <ContactForm onSubmit={onSubmit} />
        </div>
      </div>
      <ThankYouModal isOpen={isOpen} onClose={() => toggleModal(false)} />
    </section>
  );
};

export default Contact;
