import styled from 'styled-components';
import { DEVICES } from 'const/sizes';

const Intro = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  margin-bottom: 130px;
  padding: 0 20px;

  @media ${DEVICES.laptop} {
    padding-left: 100px;
    padding-right: 0;
    margin-bottom: 150px;
  }
`;

const IntroImages = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media ${DEVICES.laptop} {
    margin-top: 190px;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  max-width: 142px;
  max-height: 112px;

  @media ${DEVICES.laptop} {
    max-width: 302px;
    max-height: 238px;

    &:last-child {
      max-width: 150px;
      margin-left: auto;
      margin-top: 10px;
    }
  }
`;

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  @media (min-width: 750px) {
    width: fit-content;
  }

  @media ${DEVICES.laptop} {
    width: fit-content;
    flex-direction: column;
    align-items: unset;
    justify-content: unset;
    margin-bottom: 140px
  }
`;

const StepsList = styled.ul`
  list-style: none;
`;

const Step = styled.li`
  display: flex;
  width: 100%;
  max-width: 627px;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;

  @media ${DEVICES.laptop} {
    margin-bottom: 35px;
    font-size: 25px;
    line-height: 30px;
  }
`;

const StepPointer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 20px;
  margin-right: 27px;
  margin-top: 2px;
  background: black;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  color: white;

  @media ${DEVICES.laptop} {
    width: 27px;
    height: 25px;
    margin-right: 37px;
    margin-top: 0;
    font-size: 16px;
  }
`;

const ImageWrapper = styled.div`
  margin-right: -70px;
  margin-bottom: 38px;

  @media ${DEVICES.laptop} {
    position: absolute;
    right: -120px;
    margin-bottom: 0;
    margin-right: 0;
  }
`;

const IntroImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 750px;

  @media ${DEVICES.laptop} {
    max-width: 600px;
  }

  @media ${DEVICES.laptopMiddle} {
    max-width: 750px;
  }
`;

export {
  Intro,
  Logo,
  IntroImages,
  StepsList,
  StepPointer,
  Step,
  IntroImage,
  ImageWrapper,
  LogoContainer
}