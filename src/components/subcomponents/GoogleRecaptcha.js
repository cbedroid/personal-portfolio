import React, { useState } from "react";
import Recaptcha from "react-recaptcha";

const GoogleRecaptcha = React.forwardRef((props, ref) => {
  const [loaded, setLoaded] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isVerified, setVerified] = useState(false);

  React.useImperativeHandle(ref, () => ({
    getVerifyStatus() {
      return isVerified;
    },
  }));

  const loadRecaptcha = () => {
    console.log("Recaptcha Loaded");
    setLoaded(true);
  };

  const handleCheckBox = (response) => {
    setVerified(Boolean(response));
  };

  return (
    <div>
      <Recaptcha ref={ref} sitekey="6LctIeAeAAAAAFXUTbS_pNh0c_6aBlJLfxdaTGOS" render="explicit" verifyCallback={handleCheckBox} onloadCallback={loadRecaptcha} {...props} />
    </div>
  );
});

export default GoogleRecaptcha;
