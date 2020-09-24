import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getResultCodeLine } from "../../redux/codeReducer";

const Result = (state) => {
  //STATE
  const {
    code: { basePsOneVar, variables, codeline },
    result: { resPsOneLine },
    getResultCodeLine,
  } = state;
  console.log(variables);
  useEffect(() => {
    getResultCodeLine();
  }, [resPsOneLine]);

  const vari = variables.map((e) => {
    return (
      <tr className="result__string">
        <td className="result__line">#</td>
        <td className="result__text">
          <div>
            {e.letit.bg.name}
            {"="}
            {'"'}
            {e.letit.bg.code}
            {'"'}
          </div>
          <div>
            {e.letit.fg.name}
            {"="}
            {'"'}
            {e.letit.fg.code}
            {'"'}
          </div>
        </td>
      </tr>
    );
  });
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
              <td className="result__text"></td>
            </tr>
            {vari}
            <tr className="result__string">
              <td className="result__line">#</td>
              <td className="result__text">{codeline}</td>
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
