import React from "react";

import Select from "react-select";

type Props = {
  options: any;
  onChange: (value: string | null) => void;
  placeHolder?: string;
};

const selectStyles = {
  container: (provided: any) => ({
    ...provided,
    marginTop: 16,
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: "#f3f4f6",
    outline: "none",
    border: "2px solid inherit",
    "&:active": {
      border: "none",
    },
    "&:focus-within": {
      border: "1px solid #4338CA",
      boxShadow: "none",
    },
  }),
  input: (provided: any) => ({
    ...provided,
    padding: ".35rem",
    width: "100%",
  }),
};

const Selector = ({ options, placeHolder, onChange }: Props) => {
  return (
    <Select
      styles={selectStyles}
      options={options}
      onChange={(selected) => onChange(selected?.value || null)}
      placeHolder={placeHolder ?? "Select..."}
      defaultInputValue={"United States"}
    />
  );
};

export default Selector;
