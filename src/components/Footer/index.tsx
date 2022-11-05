import React from 'react';
import moment from 'moment';
import * as Styled from './Footer.styled';

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.FooterContent>
        <Styled.FooterTitle>{`© MODE ${moment().year()}`}</Styled.FooterTitle>
        <Styled.ExternalLinks>
          <Styled.FooterLink target="_blank" href="https://www.modeofficial.com/privacy/">
            Privacy & Cookie Policies
          </Styled.FooterLink>
          <Styled.FooterLink target="_blank" href="https://www.modeofficial.com/terms/">
            Terms and conditions
          </Styled.FooterLink>
        </Styled.ExternalLinks>
      </Styled.FooterContent>
    </Styled.Footer>
  )
}

export default Footer;