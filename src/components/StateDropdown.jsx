import React from "react";
import { states } from "../constants/constants";

const StateDropdown = ({ handleChange, countryId }) => {
  return (
    <div>
      <h1 className="text-center mb-1 font-semibold">State</h1>

      <select
        className="border-2 px-4 py-2 rounded-lg shadow-md"
        onChange={handleChange}
      >
        <option value="">Please select a state</option>
        {states
          ?.filter((filterItem) => filterItem?.countryId == countryId)
          ?.map((item) => (
            <option key={item?.stateId} value={item?.stateId}>
              {item?.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default StateDropdown;
