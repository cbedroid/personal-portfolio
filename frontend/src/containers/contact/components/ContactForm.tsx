import React, { useCallback, useMemo, useState } from "react";

import { EmailJSResponseStatus } from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import { flatMap } from "lodash";
import { useForm } from "react-hook-form";
import countryList from "react-select-country-list";
import tw from "tailwind-styled-components";
import * as yup from "yup";

import Selector from "../../../components/ui/filters/Selector";
import { ContactFormFields } from "../../../types";
import GoogleRecaptcha from "./GoogleRecaptcha";

type Props = {
  onSubmit: (data: ContactFormFields) => Promise<EmailJSResponseStatus | undefined>;
};

const FieldError = tw.small`
text-red-500
`;

const ContactForm = ({ onSubmit }: Props) => {
  const [isReCaptchaLoaded, setRecaptchaLoaded] = useState<boolean>(false);
  const countryOptions = useMemo(() => countryList().getData() || [], []);
  const yupCountryOptions = flatMap(countryOptions, "value");

  const schema = yup.object().shape({
    name: yup.string().min(3).max(80),
    email: yup.string().email().max(120),
    company: yup.string().min(4).max(80),
    country: yup.string().oneOf(yupCountryOptions).required(),
    message: yup.string().min(10),
    recaptcha: yup
      .string()
      .required("ReCaptcha is a required field. Please click the box."),
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { isDirty, errors },
  } = useForm<ContactFormFields>({
    resolver: yupResolver(schema),
    defaultValues: {
      country: "US",
    },
  });

  const watchAllFields = watch();

  const isFormDisabled = useMemo(
    () => !isDirty || flatMap(watchAllFields).filter((d) => !!d).length === 0,
    [watchAllFields, isDirty],
  );

  /* Handle Form submission callback */
  const handleFormSubmit = useCallback(
    (data: ContactFormFields) => {
      /* On Successful EmailJs, reset all form field */
      onSubmit(data).then((emailJsResponse) => {
        if (emailJsResponse?.status === 200) {
          reset();
        }
      });
    },
    [onSubmit, reset],
  );

  const handleCountryChange = (selected: string | null) => {
    setValue("country", selected || "US", {
      shouldValidate: isReCaptchaLoaded, // bind react-select event to react-hook-form validation
    });
  };

  const handleCaptcha = useCallback(
    (response: string) => {
      // Bind reCaptcha response to react-hook-form validation
      setValue("recaptcha", response, {
        shouldValidate: true,
      });
    },
    [setValue],
  );

  const onRecaptchaLoad = useCallback(() => {
    /* Checks whether Recaptcha has loaded or not.
       This check should be validated on form mount to determine the recaptcha state.

      This prevents `false-positive` when validating form for recaptcha
      response.
      If this component is mounted and recaptcha is not loaded,
      then it has failed on our side. In the case it failed because of
      our fault, we will automatically deem the `recaptcha` as PASSED.
     */
    setRecaptchaLoaded(true);
  }, [setRecaptchaLoaded]);

  return (
    <form
      className="w-full flex items-center justify-center my-12"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="top-40 bg-white shadow rounded py-12 lg:px-28 px-8">
        <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
          Let’s Work Together!
        </p>
        <div className="md:flex mt-12">
          <div className="md:w-72 flex flex-col">
            <label
              className="text-base font-semibold leading-none text-gray-800"
              htmlFor="from_name"
            >
              Name
            </label>
            <input
              arial-label="Enter your name"
              className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
              placeholder="Enter your name"
              {...register("name")}
            />
            {errors.name && <FieldError>{errors.name?.message}</FieldError>}
          </div>
          <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
            <label
              className="text-base font-semibold leading-none text-gray-800"
              htmlFor="from_email"
            >
              Email Address
            </label>
            <input
              arial-label="Enter your email address"
              type="email"
              className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
              placeholder="Enter your email address"
              {...register("email")}
            />
            {errors.email && <FieldError>{errors.email?.message}</FieldError>}
          </div>
        </div>
        <div className="md:flex items-center mt-8">
          <div className="md:w-72 flex flex-col">
            <label
              className="text-base font-semibold leading-none text-gray-800"
              htmlFor="company"
            >
              Company name
            </label>
            <input
              arial-label="Enter your company name"
              type="text"
              className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
              placeholder="Enter your company name"
              {...register("company")}
            />
            {errors.company && <FieldError>{errors.company?.message}</FieldError>}
          </div>
          <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
            <label
              className="text-base font-semibold leading-none text-gray-800"
              htmlFor="country"
            >
              Country
            </label>
            <Selector options={countryOptions} onChange={handleCountryChange} />
            {errors.country && <FieldError>{errors.country?.message}</FieldError>}
          </div>
        </div>
        <div>
          <div className="w-full flex flex-col mt-8">
            <label
              className="text-base font-semibold leading-none text-gray-800"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              aria-label="leave a message"
              className="h-36 text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
              placeholder="Your message..."
              {...register("message")}
            />
            {errors.message && <FieldError>{errors.message?.message}</FieldError>}
          </div>
        </div>
        <p className="text-xs leading-3 text-gray-600 mt-4">
          By clicking send, you agree to our terms of service, privacy policy and how we
          use data as stated.
        </p>

        <div className="flex flex-col items-center my-4">
          <GoogleRecaptcha onVerified={handleCaptcha} onLoaded={onRecaptchaLoad} />
          {errors.recaptcha && <FieldError>{errors.recaptcha?.message}</FieldError>}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full mt-4 md:mt-9 ">
          <input
            type="submit"
            className="order-last md:order-first text-base cursor cursor-pointer font-semibold leading-none text-white py-4 px-10 bg-indigo-700 disabled:opacity-40 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none w-full lg:w-1/4 "
            value="Send"
            disabled={isFormDisabled}
          />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
