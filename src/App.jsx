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
  const handleCountryChange = (e) => {
    setCountryId(e.target.value);
    setStateId(null);
    setCityId(null);
  };
  const handleStateChange = (e) => {
    setStateId(e.target.value);
    setCityId(null);
  };
  const handleCityChange = (e) => {
    setCityId(e.target.value);
  };
  const handlePincodeChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <div className="w-full flex flex-col items-center gap-4 mt-10">
        <h1 className="text-xl lg:text-3xl font-semibold">Multi Dropdown </h1>
        <div className="flex flex-col lg:flex-row gap-4  ">
          <CountryDropdown handleChange={handleCountryChange} />
          <StateDropdown
            handleChange={handleStateChange}
            countryId={countryId}
          />
          <CityDropdown handleChange={handleCityChange} stateId={stateId} />
          <PincodeDropdown handleChange={handlePincodeChange} cityId={cityId} />
        </div>
      </div>
    </>
  );
}

export default App;
