import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getResultCodeLine } from "../../redux/codeReducer";
import "./_result.scss";
import { CodeHeader } from "./codeheader";
import { CodeArea } from "./codearea";
import { CodeResultWrapper } from "./code.styled";

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
  return (
    <CodeResultWrapper>
      <CodeHeader />
      <CodeArea {...state} />
    </CodeResultWrapper>
  );
  //   <div className="result--container">
  //     <div className="result--limiter">
  //       <div className="result-header">
  //         <div className="result-header__title">
  //           copy and paste into your .bashrc file
  //         </div>
  //         <button className="result-header__copybtn">Copy</button>
  //       </div>
  //       <table className="result">
  //         <tbody>
  //           <tr className="result__string">
  //             <td className="result__line">#</td>
  //             <td className="result__text"></td>
  //           </tr>
  //           <tr className="result__string">
  //             <td className="result__line">#</td>
  //             <td className="result__text"></td>
  //           </tr>
  //           <tr className="result__string">
  //             <td className="result__line">#</td>
  //             <td className="result__text"></td>
  //           </tr>
  //           <tr className="result__string">
  //             <td className="result__line">#</td>
  //             <td className="result__text">
  //               {'export PS1="'}
  //               {'"'}
  //             </td>
  //           </tr>
  //         </tbody>
  //       </table>
  //     </div>
  //   </div>
};

const mstp = (state) => {
  return state;
};

export default connect(mstp, { getResultCodeLine })(Result);
