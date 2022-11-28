import styled from "styled-components";

export const TypingText = styled.div`
  letter-spacing: 0.17em;
  overflow: hidden;
  white-space: ${({ textWrap }) => {
    return textWrap ? "wrap" : "nowrap";
  }};
  border-right: 0.17em solid ${({ color }) => color || "#971d32"};
  animation: typing 3.5s steps(30, end);
`;
