import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardWrapper = styled(Link)`
  max-width: 300px;
  width: 30%;
  background-color: #ffffff;
  border-radius: 12px;
  border: solid 2px transparent;
  cursor: pointer;
  color: unset;
  text-decoration: none;
  &:hover {
    border: solid 2px rgb(67, 196, 232);
  }
`;

export const CardContent = styled.div`
  padding: 10px;
`;

export const CardImg = styled.div`
  img {
    width: 100% !important;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;

  p:first-child {
    font-weight: 600;
    font-size: 12px;
  }
  p:last-child {
    font-size: 10px;
  }
`;
