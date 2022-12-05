import React, { CSSProperties, useCallback, useEffect, useRef, useState } from "react";

import { MenuOpen } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";

import useKeyEvent from "../../../hooks/useKeyEvent";
import MenuListContainer from "./MenuListContainer";

type MenuProps = {
  background?: CSSProperties["background"];
  color?: CSSProperties["color"];
};
export const MenuWrapper = styled.div<MenuProps>`
  background-color: ${(props) => props.background ?? "#fff"};
  color: ${(props) => props.color ?? "#000"};
  position: absolute;
  overflow: hidden auto;
  min-width: 2rem;
  min-height: 36px;
  max-width: calc(100% - 32px);
  max-height: calc(100% - 32px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
`;
MenuWrapper.displayName = "MenuWrapper";

export const MenuTriggerButton = styled.div<{
  color: MenuProps["color"];
  expanded: boolean;
}>`
  display: inline-flex;
  justify-content: space-between;
  flex-grow: 1;
  width: ${(props) => props.expanded && "100%"};
  min-height: 36px;
  max-height: calc(100% - 40px);
  padding: 5px;
  color: ${(props) => props.color};
  cursor: pointer;
  overflow: hidden;
`;
MenuTriggerButton.displayName = "MenuTriggerButton";

type Props = {
  position?: Pick<CSSProperties, "top" | "left" | "right" | "maxHeight">;
  background?: MenuProps["background"];
  color?: MenuProps["color"];
  title?: React.ReactNode;
  isOpen?: boolean;
  expanded?: boolean;
  onClick: () => void;
  onClose: () => void;
  children: React.ReactNode;
};
const Menu = ({
  position = { top: 36, left: "-200px" },
  background,
  color,
  isOpen = false,
  expanded = false,
  onClick,
  onClose,
  title,
  children,
}: Props) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState<boolean>(isOpen);
  useKeyEvent({
    watch: "escape",
    onTrigger: () => !!open && setOpen(false),
  });

  const handleClick = useCallback(() => {
    setOpen(!open);
    onClick();
  }, [open, setOpen, onClick]);

  const handleClose = useCallback(() => {
    open && setOpen(false);
    onClose();
  }, [open, setOpen, onClose]);

  useEffect(() => {
    const handleClickCloseMenu = (event: Event) => {
      const target = event.target as Node;

      /* Close the menu if user clicks outside the menu element */
      if (!!menuRef?.current && !menuRef.current.contains(target)) {
        event.preventDefault();
        handleClose();
      }
    };

    // Subscribe to menu click events.
    document.addEventListener("click", handleClickCloseMenu, { capture: true });
    // Unsubscribe to menu click events.
    return () => {
      document.removeEventListener("click", handleClickCloseMenu);
    };
  }, [setOpen, open, menuRef, handleClose]);

  return (
    <div className="relative p-1">
      <MenuWrapper
        background={background}
        color={color}
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {title}
        <MenuTriggerButton expanded={expanded} color={color}>
          {open ? <MenuOpen /> : <MenuIcon />}
        </MenuTriggerButton>
      </MenuWrapper>
      {open && (
        <MenuListContainer ref={menuRef} position={position}>
          {children}
        </MenuListContainer>
      )}
    </div>
  );
};

export default Menu;
