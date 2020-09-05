import React from "react";
import "./promptline.scss";
const PromptPsOneLine = () => {
  let prmtest = new Array(12).fill("test length is 20 ::");
  let prmels = prmtest.map((e, i) => {
    return (
      <span className="prm-el" key={i}>
        {e}
      </span>
    );
  });
  return <div>{prmels}</div>;
};

export default PromptPsOneLine;
