import React from "react";

const AddNewElement = ({ AC }) => {
  return (
    <div
      onClick={() => {
        AC();
      }}
    >
      Add
    </div>
  );
};
const UnpdateCurrentElemet = (props) => {
  const el = props.state.currentElement;
  const arr = props.result.resPsOneLine;

  return (
    <div
      onClick={() => {
        props.updateSelectedElement({
          index: props.state.orignIndex,
          element: props.currentElement,
        });
      }}
    >
      Update
    </div>
  );
};

const Tumbler = (props) => {
  return (
    <>
      {props.state.status === "ADD_NEW" && <AddNewElement {...props} />}
      {props.state.status === "UDATE_CURRENT" && (
        <UnpdateCurrentElemet {...props} />
      )}
    </>
  );
};

export default Tumbler;
