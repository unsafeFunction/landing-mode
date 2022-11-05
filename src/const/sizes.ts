export enum Size {
  MobileTiny = "320px",
  MobileSmall = "375px",
  MobileMiddle = "425px",
  Mobile = "480px",
  Tablet = "769px",
  LaptopSmall = "1024px",
  Laptop = "1080px",
  LaptopMiddle = "1440px",
  Desktop = "1920px",
  WideDesktop = "2580px",
}

export const DEVICES = {
  mobileTiny: `(min-width: ${Size.MobileTiny})`,
  mobileSmall: `(min-width: ${Size.MobileSmall})`,
  mobileMiddle: `(min-width: ${Size.MobileMiddle})`,
  mobileLarge: `(min-width: ${Size.Mobile})`,
  tablet: `(min-width: ${Size.Tablet})`,
  laptopSmall: `(min-width: ${Size.LaptopSmall})`,
  laptop: `(min-width: ${Size.Laptop})`,
  laptopMiddle: `(min-width: ${Size.LaptopMiddle})`,
  desktop: `(min-width: ${Size.Desktop})`,
  wideDesktop: `(min-width: ${Size.WideDesktop})`,
};

export enum Hights {
  mobileLarge = "750px",
  small = "200px",
  middle = "501px",
  big = "900px",
}

export const DEVICES_HEIGHT = {
  mobileLarge: `(min-height: ${Hights.mobileLarge})`,
  small: `(min-height: ${Hights.small})`,
  middle: `(min-height: ${Hights.middle})`,
  big: `(min-height: ${Hights.big})`,
};
