import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Container(props) {
  return <div className={`container${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}


