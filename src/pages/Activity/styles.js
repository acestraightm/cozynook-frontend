import styled from "styled-components";

export const Content = styled.p`
  margin: 1.5rem 0 2rem 0;
  color: white;
  font-size: 0.9rem;
  font-weight: 400;
`;

export const ContentWrapper = styled.div`
  padding: 0 0.4em;
  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
`;

export const BookButton = styled.button`
  background: #c69c6d;
  color: #fff;
  font-size: 1.2em;
  font-weight: 500;
  border: 0px;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  padding: 0.4em 4em;
  float: right;
`;

export const Title = styled.div`
  color: #c69c6d;
  font-family: "Bebas Neue", sans-serif;
  font-size: 80px;
`;

export const Logo = styled.div`
  background-image: url("img/svg/logo-yellow.svg");
  background-size: contain;
  background-repeat: no-repeat;
  height: 200px;
  margin-bottom: 30px;
`;

export const HireLabel = styled.h6`
  color: white;
  font-family: "Bebas Neue", sans-serif;
  font-size: 60px;
  margin-bottom: 0.1em;
`;
