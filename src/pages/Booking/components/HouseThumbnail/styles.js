import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  height: 200px;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 12px;
  box-shadow: 0 1em 4em rgb(0 0 0 / 7%);
  padding: 10px;
`;

export const Title = styled.div`
  font-size: 22px;
  color: ${(props) => (props.selected ? '#c69c6d' : '#262626')};
  font-weight: 700;
`;

export const Subtitle = styled.div`
  font-size: 18px;
  color: #262626;
  font-weight: 500;
`;
export const ThumbImage = styled.div`
  background-image: ${(props) => (props.image || 'none' )};
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;