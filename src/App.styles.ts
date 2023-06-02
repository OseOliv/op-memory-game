import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: auto;
  display: flex;
  padding: 50px 0;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
 

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

// LADO ESQUERDO
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  

  @media screen and (max-width: 750px) {
    margin-bottom: 50px;
    align-items: center;
  }
`;

export const LogoLink = styled.a`
  display: block;
`;

export const InfoArea = styled.div`
  width: 100%;
  margin: 10px 0;
 

  @media screen and (max-width: 750px) {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
`;


// LADO DIREITO
export const GridArea = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;


  @media screen and (max-width: 750px) {
    justify-content: center;
    margin: 0 20px;
  }
`;

export const Grid = styled.div`
width: 700px;
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 10px;


@media screen and (max-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
