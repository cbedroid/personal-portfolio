import React from "react";

import Loader from "./Loader";

type Props = {
  src?: string | null;
  alt: string;
  className?: string;
};

const Image = ({ src, alt, className }: Props) => {
  return (
    <>
      {src ? (
        <img className={className} src={src} alt={alt} />
      ) : (
        <div className="flex h-full">
          <Loader size={125} color="secondary" />
        </div>
      )}
    </>
  );
};

export default Image;
