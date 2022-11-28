import styled from "styled-components";

export const MenuItem = styled.li`
  background: transparent;
  padding: 0.75rem 1rem;
  list-style: none;
  font-size: 0.75rem;
  line-height: 0.75rem;
  font-weight: 400;
  color: #808080;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #404040;
    background: #f2f2f2;
  }
`;

MenuItem.displayName = "MenuItem";
