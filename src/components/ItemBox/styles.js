import styled from "styled-components";

export const StyledBox = styled.div`
  width: 250px;
  background: white;
  height: 390px;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
`;

export const ProductItem = styled.img`
  height: 300px;
  width: 250px;

`;
export const ProductName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: red;
  padding-top: 20px;
`;
export const ProductPrice = styled.div`
  color: black;
`;
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const StrikeText = styled.div`
  padding: 0 20px;
  text-decoration: line-through;
`;

export const Cards = styled.div`
margin: 0 10%;
display:flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
padding: 20px;
background-color: rgb(224, 219, 219);

`