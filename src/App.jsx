import { useState } from "react";

import "./App.css";
import SelectComp from "./components/SelectComp";
import { cities, countries, pincodes, states } from "./constants/constants";

function App() {
  const [countryId, setCountryId] = useState(null);
  const [stateId, setStateId] = useState(null);
  const [cityId, setCityId] = useState(null);
  const handleChange = (e) => {
    setCountryId(e.target.value);
    setStateId(e.target.value);
    setCityId(e.target.value);
  };
  return (
    <>
      <div>
        <select onChange={handleChange}>
          <option value="">Please select a country</option>

          {countries?.map((item) => (
            <option key={item?.countryId} value={item.countryId}>
              {item?.name}
            </option>
          ))}
        </select>
        <select onChange={handleChange}>
          <option value="">Please select a state</option>
          {states
            ?.filter((filterItem) => filterItem?.countryId == countryId)
            ?.map((item) => (
              <option key={item?.stateId} value={item?.stateId}>
                {item?.name}
              </option>
            ))}
        </select>

        <select onChange={handleChange}>
          <option value="">Please select a city</option>
          {cities
            ?.filter((filterItem) => filterItem?.stateId == stateId)
            ?.map((item) => (
              <option key={item?.cityId} value={item?.cityId}>
                {item?.name}
              </option>
            ))}
        </select>

        <select onChange={handleChange}>
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
    </>
  );
}

export default App;
