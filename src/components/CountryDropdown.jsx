import React from "react";
import SelectComp from "./SelectComp";
import { countries } from "../constants/constants";

const CountryDropdown = ({ handleChange }) => {
  return (
    <div>
      <h1 className="text-center mb-1 font-semibold">Country</h1>
      <select
        onChange={handleChange}
        className="border-2 px-4 py-2 rounded-lg shadow-md"
      >
        <option value="">Please select a country</option>

        {countries?.map((item) => (
          <option
            className="py-4"
            key={item?.countryId}
            value={item?.countryId}
          >
            {item?.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryDropdown;
