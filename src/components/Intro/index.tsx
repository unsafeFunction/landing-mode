import React from 'react';
import * as Styled from './Intro.styled';

const Intro = () => {
  return (
    <Styled.Intro>
      <Styled.IntroImages>
        <Styled.LogoContainer>
          <Styled.Logo src="./logo.svg" alt="logo" />
          <Styled.Logo src="./mode-logo.svg" alt="mode-logo" />
        </Styled.LogoContainer>
        <Styled.ImageWrapper>
          <Styled.IntroImage alt="intro" src="./intro.png" />
        </Styled.ImageWrapper>
      </Styled.IntroImages>
      <Styled.StepsList>
        <Styled.Step>
          <Styled.StepPointer>1</Styled.StepPointer>
          <Styled.Step>Tag <b>&nbsp;@shopfromsocial&nbsp;</b> on Insta</Styled.Step>
        </Styled.Step>
        <Styled.Step>
          <Styled.StepPointer>2</Styled.StepPointer>
          <Styled.Step>Recieve a personalised product list in your DMs.</Styled.Step>
        </Styled.Step>
        <Styled.Step>
          <Styled.StepPointer>3</Styled.StepPointer>
          <Styled.Step>Shop similar items from hundreds of brands in one simple checkout.</Styled.Step>
        </Styled.Step>
      </Styled.StepsList>
    </Styled.Intro>
  )
}

export default Intro;