import * as React from "react"
import type { HeadFC } from "gatsby"
import * as Styled from './index.styled';
import Intro from 'components/Intro';
import EarnOfOutfit from 'components/EarnOfOutfit';
import Footer from 'components/Footer';

const IndexPage = () => {
  return (
    <>
      <Styled.GlobalStyles />
      <Styled.Content >
        <Intro />
        <EarnOfOutfit />
        <Footer />
      </Styled.Content>
    </>

  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Shop from social | by Mode</title>
