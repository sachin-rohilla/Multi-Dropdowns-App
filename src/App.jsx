import { useState } from "react";

import "./App.css";
import SelectComp from "./components/SelectComp";
import { cities, countries, pincodes, states } from "./constants/constants";
import CountryDropdown from "./components/CountryDropdown";
import StateDropdown from "./components/StateDropdown";
import CityDropdown from "./components/CityDropdown";
import PincodeDropdown from "./components/PincodeDropdown";

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
      <div className="w-full flex flex-col items-center gap-4 mt-10">
        <h1 className="text-xl lg:text-3xl font-semibold">Multi Dropdown </h1>
        <div className="flex flex-col lg:flex-row gap-4  ">
          <CountryDropdown handleChange={handleChange} />
          <StateDropdown handleChange={handleChange} countryId={countryId} />
          <CityDropdown handleChange={handleChange} stateId={stateId} />
          <PincodeDropdown handleChange={handleChange} cityId={cityId} />
        </div>
      </div>
    </>
  );
}

export default App;
