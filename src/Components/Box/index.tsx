import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  flexbox,
  FlexboxProps,
  typography,
  TypographyProps,
  background,
  BackgroundProps,
  border,
  BorderProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
} from "styled-system";

import styled from "styled-components";

interface Props
  extends LayoutProps,
    ColorProps,
    SpaceProps,
    FlexboxProps,
    TypographyProps,
    BackgroundProps,
    BorderProps,
    PositionProps,
    ShadowProps {
  children: React.ReactNode;
}

export const Box = styled.div<Props>`
  ${color}
  ${space}
   ${layout}
  ${flexbox}
  ${typography}
  ${background}
  ${border}
${position}  
${shadow}
`;
