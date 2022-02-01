import React from "react";

const Input = ({ label, id, name, type, value, onChange, errors }) => {
  return (
    <>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        className="form-control"
        id={id}
        onChange={onChange}
      />
      {errors[name] && <div className="alert alert-danger">{errors[name]}</div>}
    </>
  );
};

export default Input;
