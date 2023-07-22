import { styled } from "styled-components";

export const SupportBtn = styled.button`
  background-color: green;
  color: #ffffff;
  border-radius: 30px;
  padding: ${(props) => (!!props.padding ? props.padding : "6px 12px")};

  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  border: solid 2px transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: green;
    background-color: #ffffff;
    border: solid 2px green;
  }
`;
