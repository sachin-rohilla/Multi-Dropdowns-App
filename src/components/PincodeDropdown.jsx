import React from "react";
import { pincodes } from "../constants/constants";

const PincodeDropdown = ({ handleChange, cityId }) => {
  return (
    <div>
      <h1 className="text-center mb-1 font-semibold">PinCode</h1>{" "}
      <select
        className="border-2 px-4 py-2 rounded-lg shadow-md"
        onChange={handleChange}
      >
        <option value="">Please select a pincodes</option>
        {pincodes
          ?.filter((filterItem) => filterItem?.cityId == cityId)
          ?.map((item) => (
            <option key={item?.pincodId} value={item?.pincodId}>
              {item?.code}
            </option>
          ))}
      </select>
    </div>
  );
};

export default PincodeDropdown;
