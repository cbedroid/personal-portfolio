import tw from "tailwind-styled-components";

type Props = {
  className?: string;
};
const FixedTop = tw.div<Props>`
    fixed top-0
    left-0
    ${(props) => props.className ?? "bg-white"}
    w-full
    py-5
    px-7
`;
FixedTop.displayName = "FixedTop";

export default FixedTop;

//style={{ zIndex: 2000 }}
