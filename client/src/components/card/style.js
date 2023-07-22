import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardWrapper = styled(Link)`
  max-width: 350px;
  height: 500px;
  width: 30%;
  background-color: white;
  border-radius: 12px;
  border: 1px solid gainsboro;
  box-shadow: 2px 2px 10px 2px rgba(134, 130, 130, 0.51);
  cursor: pointer;
  color: unset;
  text-decoration: none;
  &:hover {
    scale: 1.02;
  }
`;

export const CardContent = styled.div`
  padding: 10px;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 45%;
  object-fit: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  margin-top: 1rem;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 500;
  padding: 0.7rem 0;
`;
export const CompainWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const CompanyLogo = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
`;
export const CompanyName = styled.p`
  font-size: 10px;
`;

export const CardDateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: gray;
`;

export const CardDateSpan = styled.span`
  font-size: 10px;
  margin-right: 1rem;
`;

export const GreenLine = styled.div`
  width: ${(props) => props.width}%;
  height: 3px;
  background-color: green;
  margin: 0.5rem 0;
`;

export const DonatedSum = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

export const FundedSum = styled.p`
  font-size: 10px;
  color: gray;
`;
