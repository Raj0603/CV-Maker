import React from "react";

// import styles from "./InputControl.module.css";

function InputControl({ label, ...props }) {
  return (
    <div>
      {label && <label>{label}</label>}
      <input type="text" {...props} />
    </div>
  );
}

export default InputControl;
