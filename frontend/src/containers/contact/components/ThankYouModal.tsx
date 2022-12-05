import React from "react";

import useKeyEvent from "../../../hooks/useKeyEvent";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
const ThankYouModal = ({ isOpen, onClose }: Props) => {
  useKeyEvent({
    watch: "escape",
    onTrigger: onClose,
    reset: true,
  });

  return (
    <>
      {isOpen && (
        <div className="transition-all duration-500">
          <div
            className="py-24 my-24 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 h-full"
            id="modal"
          >
            <div
              role="alert"
              className=" animated-modal container mx-auto w-11/12 md:w-2/3 max-w-xl"
            >
              <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                <div className="p-6 container m-auto">
                  <div
                    role="button"
                    tabIndex={0}
                    className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
                    onClick={onClose}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Close"
                      className="icon icon-tabler icon-tabler-x"
                      width={18}
                      height={18}
                      viewBox="0 0 20 20"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={18} y1={6} x2={6} y2={18} />
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                  </div>
                  <div className="">
                    <img
                      src="https://cdn.tuk.dev/assets/components/26May-update/newsletter-1.png"
                      alt="Envelope with a newsletter"
                      className="h-full xl:w-full lg:w-1/2 w-full"
                    />
                  </div>
                  <div className="py-20">
                    <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-4 text-center  md:mt-0 mt-4">
                      Message Sent
                    </h1>
                    <p className="text-base font-semibold leading-normal text-gray-600 text-center ">
                      Thank You! Your message was sent successfully!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ThankYouModal;
