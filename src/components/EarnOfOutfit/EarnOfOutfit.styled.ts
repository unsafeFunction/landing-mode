import styled from 'styled-components';
import Colors from 'const/colors';
import { DEVICES } from 'const/sizes';

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  margin-bottom: 70px;

  @media ${DEVICES.laptop} {
    min-height: 750px;
    flex-direction: column;
    padding-left: 150px;
    padding-right: 180px;
    margin-bottom: 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 30px;

  @media ${DEVICES.laptop} {
    max-width: 650px;
    margin-bottom: 0;
    margin-left: auto;
  }
`;

const EarnTitle = styled.h2`
  margin-bottom: 25px;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: right;

  @media ${DEVICES.laptop} {
    margin-bottom: 41px;
    line-height: 30px;
    font-size: 25px;
  }
`;

const EarnDescription = styled.p`
  margin-bottom: 78px;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: right;

  @media ${DEVICES.laptop} {
    margin-bottom: 37px;
    font-size: 20px;
    line-height: 24px;
  }
`;

const SignUpButton = styled.a`
  background-color: ${Colors.LightBlack};
  border-radius: 10px;
  color: white;
  width: 100%;
  max-width: 200px;
  padding: 18px 0;
  transition: opacity 0.1s linear;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0em;
  text-decoration: none;
  text-align: center;

  &:hover {
    opacity: 0.8;
  }

  @media ${DEVICES.laptop} {
    max-width: 300px;
    font-size: 20px;
    line-height: 24px;
  }
`;

const ImageWrapper = styled.div`


  @media ${DEVICES.laptop} {
    position: absolute;
    left: 40px;
  }
`;

const IntroImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 750px;
`;

export {
  Container,
  IntroImage,
  EarnTitle,
  EarnDescription,
  SignUpButton,
  Content,
  ImageWrapper
}