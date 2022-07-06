import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => props.color || '#c69c6d'};
  color: ${(props) => (props.color || '#fff')};
  font-size: ${(props) => (props.fontSize || '1.3em')};
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
