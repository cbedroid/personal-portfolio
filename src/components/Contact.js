import React from "react";

const Contact = () => {
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
        <div className="w-full flex items-center justify-center my-12">
          <div className="top-40 bg-white shadow rounded py-12 lg:px-28 px-8">
            <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Let’s Work Together!</p>
            <div className="md:flex items-center mt-12">
              <div className="md:w-72 flex flex-col">
                <label className="text-base font-semibold leading-none text-gray-800">Name</label>
                <input
                  tabindex="0"
                  arial-label="Please input name"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input  name"
                />
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-800">Email Address</label>
                <input
                  tabindex="0"
                  arial-label="Please input email address"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input email address"
                />
              </div>
            </div>
            <div className="md:flex items-center mt-8">
              <div className="md:w-72 flex flex-col">
                <label className="text-base font-semibold leading-none text-gray-800">Company name</label>
                <input
                  tabindex="0"
                  roles="input"
                  arial-label="Please input company name"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input company name"
                />
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-800">Country</label>
                <input
                  tabindex="0"
                  arial-label="Please input country name"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input country name"
                />
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col mt-8">
                <label className="text-base font-semibold leading-none text-gray-800">Message</label>
                <textarea
                  tabindex="0"
                  aria-label="leave a message"
                  roles="textbox"
                  type="name"
                  className="h-36 text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                ></textarea>
              </div>
            </div>
            <p className="text-xs leading-3 text-gray-600 mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
            <div className="flex items-center justify-center w-full">
              <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
