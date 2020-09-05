import React from "react";

export const Result = () => {
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
            <tr className="result__string">
              <td className="result__line">#</td>
              <td className="result__text"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
