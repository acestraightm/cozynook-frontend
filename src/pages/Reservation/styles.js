import styled from 'styled-components';

export const RightBlockContainer = styled.section`
  position: relative;
  padding: 2rem 0 1rem;

  @media only screen and (max-width: 768px) {
    padding: 2rem 0 1rem;
  }
`;

export const Content = styled.p`
  margin: 1.5rem 0 2rem 0;
  color: white;
`;

export const ContentWrapper = styled.div`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 400px;
`;

export const Title = styled.h6`
  font-family: 'Bebas Neue', sans-serif;
  color: white;
  font-size: 56px;
`;

export const Subtitle = styled.div`
  color: white;
  font-size: 36px;
  font-weight: 500;
`;

export const Logo = styled.div`
  color: #c69c6d;
  font-size: 56px;
  font-family: 'Bebas Neue', sans-serif;
`;

export const DecorationBg = styled.div`
  background-image: url("img/svg/home-decoration.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 100%;
  height: 120%;
  position: absolute;
  left: 0px;
`;

export const FooterContainer = styled.div`
  max-width: 510px;
  width: 100%;
  display: flex;

  @media screen and (max-width: 414px) {
    padding: 2rem 0;
    padding-right: 50%;
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: rgb(255, 130, 92);
    }
  }
`;