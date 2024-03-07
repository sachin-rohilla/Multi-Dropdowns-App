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
  const [selectedData, setSelectedData] = useState({
    country: "",
    state: "",
    city: "",
    pincode: "",
  });
  const [tableList, setTableList] = useState([]);
  const handleCountryChange = (e) => {
    const country = countries.find((item) => item.countryId == e.target.value);
    setSelectedData({
      ...selectedData,
      country: country?.name,
    });
    setCountryId(e.target.value);
    setStateId(null);
    setCityId(null);
  };
  const handleStateChange = (e) => {
    const state = states.find((item) => item.stateId == e.target.value);
    setSelectedData({
      ...selectedData,
      state: state?.name,
    });
    setStateId(e.target.value);
    setCityId(null);
  };
  const handleCityChange = (e) => {
    const city = cities.find((item) => item.cityId == e.target.value);
    setSelectedData({
      ...selectedData,
      city: city?.name,
    });
    setCityId(e.target.value);
  };
  const handlePincodeChange = (e) => {
    const pincode = pincodes.find((item) => item.pincodId == e.target.value);
    setSelectedData({
      ...selectedData,
      pincode: pincode?.code,
    });
  };
  const handleSaveData = () => {
    setTableList((prev) => [...prev, selectedData]);
    setSelectedData({
      country: "",
      state: "",
      city: "",
      pincode: "",
    });
  };
  console.log(selectedData);

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

        <button
          className="bg-yellow-400 text-white py-2 w-40 rounded-lg"
          onClick={handleSaveData}
        >
          Save Selected Data
        </button>

        <table className="styled-table">
          <thead>
            <tr>
              <th>Country</th>
              <th>State</th>
              <th>City</th>
              <th>PinCode</th>
            </tr>
          </thead>
          <tbody>
            {tableList?.map((item, index) => (
              <tr key={index}>
                <td>{item?.country || "N/A"}</td>
                <td>{item?.state || "N/A"}</td>
                <td>{item?.city || "N/A"}</td>
                <td>{item?.pincode || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
