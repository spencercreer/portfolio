import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Row(props) {
  return <div className={"row"}>{props.children}</div>;
}

export default Row;
