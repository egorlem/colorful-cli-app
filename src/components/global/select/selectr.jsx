import React from "react";

export const SelectModule = () => {
  let data2 = [1, 2, 3];
  const items = data2.map((item) => {
    return (
      <li key={item} className="select__item">
        {item}
      </li>
    );
  });
  return (
    <>
      <div className="select__input" data-type="input">
        <span data-type="value">1</span>
        {`[>]`}
      </div>
      <div className="select__dropdown open">
        <ul className="select__list">{items}</ul>
      </div>
      `;
    </>
  );
};

// const getTemplate = (data = [], placeholder, selectedId) => {
//   let text = "initial placeholder";
//   const items = data.map((item) => {
//     let cls = "";
//     if (selectedId === item.id) {
//       text = item.value;
//       cls = "selected";
//     }
//     return `<li data-type="item"  data-id="${item.id}" class="select__item ${cls}">${item.value}</li>`;
//   });
//   return ` <div class="select__input" data-type="input">
//     <span data-type="value">${text}</span>
//   [>]
//     </div>
//     <div class="select__dropdown">
//     <ul class="select__list">
//      ${items.join("")}
//     </ul>
//     </div>`;
// };
