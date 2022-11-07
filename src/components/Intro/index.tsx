import React from 'react';
import * as Styled from './Intro.styled';

const Intro = () => {
  return (
    <Styled.Intro>
      <Styled.IntroImages>
        <Styled.LogoContainer>
          <Styled.LogoNameContainer>
            <Styled.LogoText>
              SHOP
              <br />
              <em>from</em>
              <br />
              SOCIAL
            </Styled.LogoText>
            <Styled.LogoLine src="./logo-line.svg" alt="logo line" />
          </Styled.LogoNameContainer>
          <Styled.Logo src="./mode-logo.svg" alt="mode-logo" />
        </Styled.LogoContainer>
        <Styled.ImageWrapper>
          <Styled.IntroImage alt="intro" src="./intro.png" />
        </Styled.ImageWrapper>
      </Styled.IntroImages>
      <Styled.StepsList>
        <Styled.Step>
          <Styled.StepPointer>1</Styled.StepPointer>
          <Styled.Step>
            <span>
              <u><b>Find</b></u> a post in Instagram you want to shop.
            </span>
          </Styled.Step>
        </Styled.Step>
        <Styled.Step>
          <Styled.StepPointer>2</Styled.StepPointer>
          <Styled.Step>
            <span>
              <b><u>Tag</u></b> our account <b>&nbsp;@shopfromsocial&nbsp;</b> underneath
            </span>
          </Styled.Step>
        </Styled.Step>
        <Styled.Step>
          <Styled.StepPointer>3</Styled.StepPointer>
          <Styled.Step>
            <span>
              <u><b>Buy</b></u> similar items from hundreds of top brands in one simple checkout.
            </span>
          </Styled.Step>
        </Styled.Step>
      </Styled.StepsList>
    </Styled.Intro>
  )
}

export default Intro;