import styled from 'styled-components';
import { DEVICES } from 'const/sizes'

const Footer = styled.footer`
  width: 100%;
  padding: 10px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;

  @media ${DEVICES.laptop} {
    max-width: 650px;
    flex-direction: row;
    margin: 0 auto;
  }
`

const FooterLink = styled.a`
  margin-right: 30px;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  color: black;
  cursor: pointer;
  text-decoration: underline;
  transition: opacity 0.1s linear;

  &:hover {
    opacity: 0.6;
  }

  &:last-child {
    margin-right: 0;
  }

  @media ${DEVICES.laptop} {
    margin-right: 60px;
    font-size: 18px;
  }
`;

const FooterTitle = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;

  @media ${DEVICES.laptop} {
    margin-right: 60px;
    font-size: 18px;
  }
`;

const ExternalLinks = styled.div`
  margin-bottom: 30px;

  @media ${DEVICES.laptop} {
    margin-bottom: 0;
  }
`;

export {
  Footer,
  FooterContent,
  FooterLink,
  FooterTitle,
  ExternalLinks
}