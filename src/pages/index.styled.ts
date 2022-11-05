import styled, { createGlobalStyle } from 'styled-components';
import Colors from 'const/colors';
import { DEVICES } from 'const/sizes'

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: "Inter var";
  }
  *,
  *::before,
  *::after {
      box-sizing: inherit;
      margin: 0;
      padding: 0;
  }
  body {
    background-color: ${Colors.PageBG};
    margin: 0;
    padding-bottom: 20px;
    padding-top: 68px;

    @media ${DEVICES.laptop} {
      padding-top: 0;
      padding-bottom: 0;
    }
  }
`;

const Content = styled.main`
`;

export {
  Content,
  GlobalStyles,
}