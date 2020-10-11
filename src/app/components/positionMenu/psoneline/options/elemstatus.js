import React from "react";
import styled from "styled-components";

const ElmtStutusWrapper = styled.div`
  display: flex;
  font-size: 1.2rem;
  font-weight: 400;
`;
const CurrentColor = styled.div`
  color: ${(props) => props.color || black};
  &:after {
    color: black;
    content: ">";
  }
`;
const CurrentDecor = styled.div`
  &:after {
    content: ">";
  }
`;
const SlectedSequnces = styled.div`
  &:after {
    content: ">";
  }
`;
let under = "⋃";

const FgColorPreview = ({ hexString }) => {
  return <CurrentColor color={hexString}>{"[▣]"}</CurrentColor>;
};
const BgColorPreview = ({ hexString }) => {
  return <CurrentColor color={hexString}>{"[▣]"}</CurrentColor>;
};

const displayDecoration = (element, i) => {
  switch (element) {
    case "regular":
      const rgl = <span className="regular">{"r"}</span>;
      return (
        <CurrentDecor className="regular" key={`prv${i}`}>
          {"["}
          {rgl}
          {"]"}
        </CurrentDecor>
      );
    case "bold":
      const bld = <span className="bold">{"B"}</span>;
      return (
        <CurrentDecor key={`prv${i}`}>
          {"["}
          {bld}
          {"]"}
        </CurrentDecor>
      );
    case "underscore":
      const undscr = <span className="underscore">{"⋃"}</span>;
      return (
        <CurrentDecor key={`prv${i}`}>
          {"["}
          {undscr}
          {"]"}
        </CurrentDecor>
      );
    case "blink":
      const blk = <span className="blink">{"l"}</span>;
      return (
        <CurrentDecor key={`prv${i}`}>
          {"["}
          {blk}
          {"]"}
        </CurrentDecor>
      );
    default:
      return;
  }
};

const DecorationPreview = ({ style }) => {
  const DecorPreviewLien = style.map((e, i) => displayDecoration(e, i));
  return <>{DecorPreviewLien}</>;
};
export const ElementStatus = (state) => {
  const {
    psOneOptions: {
      currentElement: { bg, fg, sequences, style },
    },
  } = state;
  return (
    <ElmtStutusWrapper>
      <SlectedSequnces>{sequences}</SlectedSequnces>
      <BgColorPreview {...bg} />
      <FgColorPreview {...fg} />
      <DecorationPreview style={style} />
    </ElmtStutusWrapper>
  );
};
