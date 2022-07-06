import styled from "styled-components";

export const CalendarWrapper = styled.div`
  background-color: #c4d1d2;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  padding: 1rem;
`;

export const DetailsButton = styled.button`
  background: #f2f2f4;
  color: #c69c6d;
  font-size: 1.3rem;
  font-weight: 500;
  width: 100%;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  cursor: pointer;
  max-width: 60px;
  border: none;
`;

export const CalendarContainer = styled.div`
  background-color: white;
  border-radius: 1em;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 0 1em 4em rgb(0 0 0 / 7%);
`;

export const DaysContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const ConfirmDatesButton = styled.button`
  background: #c69c6d;
  color: #fff;
  font-size: 1.3em;
  font-weight: 500;
  width: 100%;
  border: 0px;
  border-radius: 30px;
  outline: none;
  cursor: pointer;
  padding: 0.4em;
`;

export const BookNowButton = styled.button`
  background: #c69c6d;
  color: #fff;
  font-size: 1.6em;
  font-weight: 500;
  width: 100%;
  border: 0px;
  height: 64px;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  padding: 0.4em;
`;

export const RoomDetailsContainer = styled.div`
  background-color: white;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 100%;
`;