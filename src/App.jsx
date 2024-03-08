import { useState } from "react";
import { cities, countries, pincodes, states } from "./constants/constants";
import CountryDropdown from "./components/CountryDropdown";
import StateDropdown from "./components/StateDropdown";
import CityDropdown from "./components/CityDropdown";
import PincodeDropdown from "./components/PincodeDropdown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import "./App.css";

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
    if (!selectedData?.country) {
      toast.error("Please select country");
    } else if (!selectedData?.state) {
      toast.error("Please select state");
    } else if (!selectedData?.city) {
      toast.error("Please select city");
    } else if (!selectedData?.pincode) {
      toast.error("Please select pincode");
    } else {
      setTableList((prev) => [
        ...prev,
        {
          countryId: countryId,
          stateId: stateId,
          cityId: cityId,
          pincodeId: selectedData?.pincode,

          ...selectedData,
        },
      ]);
      setCountryId(null);
      setStateId(null);
      setCityId(null);
      setSelectedData({
        country: "",
        state: "",
        city: "",
        pincode: "",
      });
      toast.success("Data saved successfully");
    }
  };

  const handleDelete = (id) => {
    setTableList(
      tableList?.filter((filterItem) => filterItem?.countryId !== id)
    );
    toast.success("Data deleted successfully");
  };
  const handleEdit = (data) => {};
  console.log(selectedData, countryId, tableList);

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableList?.length > 0 &&
              tableList?.map((item, index) => (
                <tr key={index}>
                  <td>{item?.country}</td>
                  <td>{item?.state}</td>
                  <td>{item?.city}</td>
                  <td>{item?.pincode}</td>
                  <td>
                    <span className="flex items-center gap-2 justify-center">
                      {/* <MdEdit
                        className="text-xl cursor-pointer"
                        onClick={() => handleEdit(item)}
                      /> */}
                      <MdDelete
                        className="text-xl cursor-pointer"
                        onClick={() => handleDelete(item?.countryId)}
                      />
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {!tableList?.length && (
          <h1 className="font-semibold">Data not available</h1>
        )}
      </div>
      <ToastContainer autoClose={2000} hideProgressBar />
    </>
  );
}

export default App;
