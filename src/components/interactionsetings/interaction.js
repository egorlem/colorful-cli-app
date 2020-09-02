import React from "react";
import { PsOneOptions } from "./setpsone";
import { connect } from "react-redux";
import { getFgColor, getBgColor } from "../../redux/initReducer";
import "./_psoneoptions.scss";

const InteractionLayOut = (props) => {
  return (
    <>
      <PsOneOptions state={props} />
    </>
  );
};

function mapStateToProps(state) {
  return { state: state.init };
}

export default connect(mapStateToProps, { getFgColor, getBgColor })(
  InteractionLayOut
);
