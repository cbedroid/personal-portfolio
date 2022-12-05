import React, { useCallback } from "react";

import Recaptcha from "react-recaptcha";

type Props = {
  onVerified: (response: string) => void;
  onLoaded?: () => void;
};
const GoogleRecaptcha = ({ onVerified, onLoaded }: Props) => {
  const handleVerifyRecaptcha = useCallback(
    (response: string) => {
      onVerified(response);
    },
    [onVerified],
  );

  return (
    <div>
      <Recaptcha
        sitekey={process.env.REACT_APP_RECAPTCHA_PUBLIC_KEY}
        render="explicit"
        verifyCallback={handleVerifyRecaptcha}
        onloadCallback={() => (onLoaded ? onLoaded() : null)}
      />
    </div>
  );
};

export default GoogleRecaptcha;
