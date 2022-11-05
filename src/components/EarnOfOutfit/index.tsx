import React from 'react';
import * as Styled from './EarnOfOutfit.styled';

const EarnOfOutfit = () => {
  return (
    <Styled.Container>
      <Styled.ImageWrapper>
        <Styled.IntroImage alt="intro" src="./earn-of-content.png" />
      </Styled.ImageWrapper>
      <Styled.Content>
        <Styled.EarnTitle>Want to earn from your outfits?</Styled.EarnTitle>
        <Styled.EarnDescription>
          We partner with all types of content creators and allow you to earn up to 70% of
          revenue when you inspire a purchase.
          <br />
          <br />
          Tap below to sign up on MODE and begin earning!
        </Styled.EarnDescription>
        <Styled.SignUpButton target="_blank" href="https://www.modeofficial.com/private-beta/">Sign Up</Styled.SignUpButton>
      </Styled.Content>
    </Styled.Container>
  )
}

export default EarnOfOutfit;