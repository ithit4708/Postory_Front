import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      font-family: sans-serif;
      margin: 0;
      padding: 0;
    }
     
    body {
      /* min-height: 100vh;
      min-width: 320px; */
      color: black;
      background-color: white;
  
      font-family: "Pretendard","Apple SD Gothic Neo","Malgun Gothic",sans-serif;

      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      text-align: left;
      overflow-y: scroll;
    }

    ol, ul {
	    list-style: none;
    }

    a {
      text-decoration: none;
      user-select: none;
      color:black;

      &:hover {
      text-decoration: none;
      }
    }

    button {
      border: none;
      background: none;
      cursor: pointer;
    }
`;

export default GlobalStyle;
