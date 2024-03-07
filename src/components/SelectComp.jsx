import React from "react";

const SelectComp = ({ id, label, value, handleChange }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id} onChange={handleChange}>
        <option value={value}>{value}</option>
      </select>
    </div>
  );
};

export default SelectComp;
