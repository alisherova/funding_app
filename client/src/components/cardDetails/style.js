import styled from "styled-components";

export const CardDetailsWrapper = styled.div`
  width: 65%;
  height: 60vh;
  display: flex;
  background-color: whitesmoke;
  border-radius: 12px;
  margin: 5rem auto;
`;

export const MainImg = styled.img`
  width: 100%;
  height: 100%;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
`;

export const FundedSum = styled.p`
  font-size: 46px;
  font-weight: 500;
`;
export const DetailsContent = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TotalSum = styled.div`
  font-size: 12px;
  color: gray;
  margin: 0.5rem 0;
`;
export const SupportersCount = styled.span`
  color: gray;
  font-size: 12px;
`;
export const DetailsDateContent = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0.5rem 0;
  margin-bottom: 2rem;
`;

export const GreenLine = styled.div`
  width: ${(props) => props.width}%;
  height: 3px;
  background-color: green;
  margin: 0.5rem 0;
`;

export const CardDetailsBody = styled.div`
  width: 65%;
  margin: 3rem auto;
`;
export const SecondaryImg = styled.img`
  width: 100%;
`;

export const Description = styled.p`
  margin-bottom: 2rem;
`;
