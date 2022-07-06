import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => props.color || '#2e186a'};
  color: ${(props) => (props.color ? '#2E186A' : '#fff')};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: ${(props) => (props.color ? '1px solid #2E186A' : '0px')};
  border-radius: 8px;
  height: 60px;
  outline: none;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;

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


export const CarouselArrow = styled.div`
  display: flex !important;
  width: 40px !important;
  height: 60px !important;
  z-index: 20 !important;
  transform: translate(0, -50%);
  background: #c69c6d !important;
  justify-content: center;
  align-items: center;
`;
