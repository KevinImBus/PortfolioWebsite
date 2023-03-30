import React from "react";
import "../styles/formInput.scss";

export default function FormInput(props) {
  const { label, onChange, id, ...inputProps } = props;
  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} />
    </div>
  );
}
