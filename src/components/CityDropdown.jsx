import React from "react";
import { cities } from "../constants/constants";

const CityDropdown = ({ handleChange, stateId }) => {
  return (
    <div>
      <h1 className="text-center mb-1 font-semibold">City</h1>

      <select
        className="border-2 px-4 py-2 rounded-lg shadow-md"
        onChange={handleChange}
      >
        <option value="">Please select a city</option>
        {cities
          ?.filter((filterItem) => filterItem?.stateId == stateId)
          ?.map((item) => (
            <option key={item?.cityId} value={item?.cityId}>
              {item?.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default CityDropdown;
