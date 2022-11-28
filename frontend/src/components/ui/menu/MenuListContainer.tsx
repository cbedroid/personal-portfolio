import { CSSProperties, forwardRef, ReactNode } from "react";

import styled from "styled-components";

const MenuContainerWrapper = styled.div`
  background-color: #fff;
  color: #000;
  position: absolute;
  overflow: hidden auto;
  min-width: 14rem;
  min-height: 125px;
  max-width: calc(100vw - 32px);
  max-height: calc(100vh - 32px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  z-index: 1050;
`;

type Position = Pick<CSSProperties, "top" | "left" | "right" | "maxHeight">;
type MenuContainerProps = {
  position: Position;
  children: ReactNode;
};

const MenuContainer = forwardRef<HTMLDivElement, MenuContainerProps>((props, ref) => {
  const { children, position } = props;
  return (
    <MenuContainerWrapper ref={ref} style={position}>
      {children}
    </MenuContainerWrapper>
  );
});

export default MenuContainer;
