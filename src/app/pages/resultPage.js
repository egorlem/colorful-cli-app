import React, { useEffect } from "react";
import Result from "../components/result/result";

export const ResultPage = () => {
  useEffect(() => {
    document.title = "Colorful CLI / Result";
  }, []);

  return (
    <div className="content--limiter">
      <Result />
    </div>
  );
};
