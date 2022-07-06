import { createGlobalStyle } from "styled-components";

const Styles = createGlobalStyle`

  body,
  html,
  a {
      font-family: 'Ubuntu', sans-serif;
  }


  body {
      margin:0;
      padding:0;
      border: 0;
      outline: 0;
      overflow-x: hidden;
      background-image: url("/img/jpg/main_bg.jpg");
      background-size: cover;
      background-position: center;
  }

  a:hover {
      color: #000;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
      font-family: 'Ubuntu', sans-serif;
      color: #0a1f44;
      font-size: 2.575rem;
      line-height: 3.0625rem;
    
      @media only screen and (max-width: 414px) {
        font-size: 1.625rem;
      }
  }

  p {
      color: #343D48;
      font-size: 1.125rem;
  }

  h1 {
      font-weight: 600;
  }

  a {
      text-decoration: none;
      outline: none;
      color: #2E186A;

      :hover {
          color: #2e186a;
      }
  }
  
  *:focus {
      outline: none;
  }

  .about-block-image svg {
      text-align: center;
  }

  .ant-drawer-body {
      display: flex;
      flex-direction: column;
      padding: 1.25rem;
      text-align: left;
      padding-top: 2.5rem;
      padding-right: 2rem;
  }

  .anticon .anticon-star {
    color: #f28e22;
  }

  .Calendar {
    width: 100% !important;
    min-height: 20em !important;
    box-shadow: none !important;
    padding-top: 0px !important;
    .-ltr {
      min-height: 2em !important;
    }
  }

  .Calendar__sectionWrapper {
    min-height: 21em !important;
  }

  .Calendar__header {
    padding: 1.5em 2.9em !important;
  }

  .Calendar__weekDays {
    padding: 0 1.6em !important;
  }
  
  .Calendar__day {
    font-weight: 500;
  }
  .Calendar__day.-selectedBetween {
    color: white !important;
  }
  .Calendar__section {
    padding: 0 2em !important;
  }

  .label-sm {
    font-size: 12px;
    color: #cccdd8;
  }
  .value-lg {
    font-size: 24px;
    font-weight: 700;
    color: #2b2b2b;
  }
  .value-md {
    font-size: 18px;
    font-weight: 700;
    color: #2b2b2b;
  }
  .btn-submit {
    background: #c69c6d;
    color: #fff;
    font-size: 1.4em;
    font-weight: 500;
    width: 100%;
    border: 0px;
    height: 64px;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
    padding: 0.4em;
  }
`;

export default Styles;
