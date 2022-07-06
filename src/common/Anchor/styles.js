import styled from 'styled-components';

export const Anchor = styled.a`
  background: ${(props) => props.color || '#c69c6d'};
  color: ${(props) => (props.color || '#fff')};
  font-size: 1.3rem;
  font-weight: 500;
  width: 100%;
  border: ${(props) => (props.color ? '1px solid "#c69c6d"' : '0px')};
  border-radius: 30px;
  height: 60px;
  outline: none;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  border: none;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  &:hover {
    color: #dddddd;
  }

  @media only screen and (max-width: 1024px) {
    width: ${(props) => (props.width ? '160px' : '100%')};
  }

  @media only screen and (max-width: 768px) {
    width: ${(props) => (props.width ? '140px' : '100%')};
  }

  @media only screen and (max-width: 480px) {
    width: ${(props) => (props.width ? '130px' : '100%')};
  }
`;
