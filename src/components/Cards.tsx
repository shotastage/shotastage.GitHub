import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  word-wrap: break-word;
  background-clip: border-box;
  background: white;
  border-radius: 20px;
  margin: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.06);
`;

export const CardSquare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-clip: border-box;
  background: white;
  border-radius: 30px;
  margin: 10px;
  width: 150px;
  height: 150px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.06);
`;

export const CardIcon = styled.object`
  width: 80px;
  height: 80px;
`;

export const CardBody = styled.div`
  padding: 1rem 1rem;
  padding-top: 0.2rem;
`;


export const CardHeading = styled.h3`
  font-size: 1.5rem;
`;

export const CardDescription = styled.p`
  color: #333;
`;
