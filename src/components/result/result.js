import React from "react";

export const Result = () => {
  return (
    <div class="result--container">
      <div class="result--limiter">
        <div class="result-header">
          <div class="result-header__title">
            copy and paste into your .bashrc file
          </div>
          <button class="result-header__copybtn">Copy</button>
        </div>
        <table class="result">
          <tbody></tbody>
          <tr class="result__string">
            <td class="result__line">#</td>
            <td class="result__text"></td>
          </tr>
          <tr class="result__string">
            <td class="result__line">#</td>
            <td class="result__text"></td>
          </tr>
        </table>
      </div>
    </div>
  );
};
