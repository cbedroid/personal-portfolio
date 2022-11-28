import React, { CSSProperties, useCallback, useState } from "react";

import LinesEllipsis from "react-lines-ellipsis";
import tw from "tailwind-styled-components";

type ButtonProps = {
  color?: CSSProperties["color"];
};
const Button = tw.button<ButtonProps>`
  flex
  items-center
  justify-center
  justify-self-end
   my-4 md:mb-0
   border
   border-gray-300
   hover:border-gray-100
   hover:bg-gray-900
   text-sm
   rounded-xl
   tracking-wide
   font-medium
   cursor-pointer
   transition
   ease-in
   duration-200
   w-32
   p-1
   ${(props) => !!props.color && `bg-${props.color}-500 hover:bg-${props.color}-800 `}
`;

type Props = {
  text: string;
  isReadMore?: boolean;
  onClick?: () => void;
  color?: CSSProperties["color"];
};

const TextEllipsis = ({ text, color = "blue", isReadMore = true, onClick }: Props) => {
  const [maxLine, setMaxLine] = useState<number>(4);
  const [isClamped, setClamp] = useState<boolean>(false);

  const handleReflow = useCallback(
    ({ clamped }: { clamped: boolean }) => {
      setClamp(clamped);
    },
    [setClamp],
  );

  const handleButton = useCallback(() => {
    /* `clamped`: Set line random long integer to display full text.
      `not clamped`: Set max line to ellipses text.
     */
    isClamped ? setMaxLine(2000) : setMaxLine(4);
    // handle callback on button click
    !!onClick && onClick();
  }, [onClick, isClamped, setMaxLine]);

  return (
    <>
      <LinesEllipsis
        text={text}
        maxLine={maxLine}
        trimRight
        basedOn="letters"
        onReflow={handleReflow}
      />
      {isReadMore && (
        <div className="flex justify-end">
          <Button color={color} onClick={handleButton}>
            {isClamped ? " read more" : "hide"}
          </Button>
        </div>
      )}
    </>
  );
};

export default TextEllipsis;
