import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getResultCodeLine } from "../../redux/codeReducer";
import "./_result.scss";
import styled from "styled-components";

const VarList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Result = (state) => {
  //STATE;
  const {
    result: { resPsOneLine },
    code: { codeline, bgVar, fgVar },
    getResultCodeLine,
  } = state;
  useEffect(() => {
    getResultCodeLine();
  }, [resPsOneLine]);

  const bg = bgVar.map((e, i) => {
    return <VarList key={`bgVar${i}`}>{e}</VarList>;
  });
  const fg = fgVar.map((e, i) => {
    return <VarList key={`fgVar${i}`}>{e}</VarList>;
  });
  const line = codeline.map((e) => {
    return <div>{e}</div>;
  });

  // const vari = variables.map((e) => {
  //   return (
  //     <tr className="result__string">
  //       <td className="result__line">#</td>
  //       <td className="result__text">
  //         <div>
  //           {e.letit.bg.name}
  //           {"="}
  //           {'"'}
  //           {e.letit.bg.code}
  //           {'"'}
  //         </div>
  //         <div>
  //           {e.letit.fg.name}
  //           {"="}
  //           {'"'}
  //           {e.letit.fg.code}
  //           {'"'}
  //         </div>
  //       </td>
  //     </tr>
  //   );
  // });
  return (
    <div className="result--container">
      <div className="result--limiter">
        <div className="result-header">
          <div className="result-header__title">
            copy and paste into your .bashrc file
          </div>
          <button className="result-header__copybtn">Copy</button>
        </div>
        <table className="result">
          <tbody>
            <tr className="result__string">
              <td className="result__line">#</td>
              <td className="result__text">{fg}</td>
            </tr>
            <tr className="result__string">
              <td className="result__line">#</td>
              <td className="result__text">{bg}</td>
            </tr>
            <tr className="result__string">
              <td className="result__line">#</td>
              <td className="result__text"></td>
            </tr>
            <tr className="result__string">
              <td className="result__line">#</td>
              <td className="result__text">
                {'export PS1="'}
                {line}
                {'"'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mstp = (state) => {
  return state;
};

export default connect(mstp, { getResultCodeLine })(Result);
