import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// This Col component offers us the convenience of being able to set a column's "size" prop instead of its className
// We can also omit the col- at the start of each Bootstrap column class, e.g. size="md-12" instead of className="col-md-12"

export default function Col(props) {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");

  return (
    <div className={`${size} px-0`}>
      {props.children}
    </div>
  );
}