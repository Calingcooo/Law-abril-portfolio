import React, { useState, useEffect } from "react";
import SuccessModal from "./SuccessModal";
import axios from "axios";

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [regions, setRegions] = useState([]);
  const [cities, setAllCities] = useState([]);
  const [barangays, setBarangays] = useState([]);

  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedBarangay, setSelectedBarangay] = useState(null);

  const regionUri = "https://psgc.gitlab.io/api/regions/";
  const cityUri = `https://psgc.gitlab.io/api/regions/${selectedRegion?.code}/cities/`;
  const barangayUri = `https://psgc.gitlab.io/api/cities/${selectedCity?.code}/barangays/`;

  const handleRegionClick = async () => {
    try {
      const { data } = await axios.get(regionUri);

      if (data) {
        setRegions(data);
      }
    } catch (error) {
      console.error("Something went wrong fetching provinces", error);
    }
  };

  const handleCityClick = async () => {
    try {
      const { data } = await axios.get(cityUri);

      if (data) {
        setAllCities(data);
      }
    } catch (error) {
      console.error("Something went wrong fetching cities", error);
    }
  };

  const handleBarangayClick = async () => {
    try {
      const { data } = await axios.get(barangayUri);

      if (data) {
        setBarangays(data);
      }
    } catch (error) {
      console.error("Something went wrong fetching barangays", error);
    }
  };

  const handleRegionChange = (e) => {
    const selected_region = regions.find(
      (province) => province.name === e.target.value
    );
    setSelectedRegion(selected_region);
  };

  const handleCityChange = (e) => {
    const selected_city = cities.find((city) => city.name === e.target.value);

    setSelectedCity(selected_city);
  };

  const handleBarangayChange = (e) => {
    setSelectedBarangay(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const baseUri = "http://localhost:3000/api/send-email";
    const formData = new FormData(e.target);
    try {
      const { data } = await axios.post(baseUri, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      setSuccessMessage(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleCityClick();
    handleBarangayClick();
  }, [selectedRegion, selectedCity]);

  return (
    <div className="max-w-[75rem] max-lg:px-10 m-auto flex flex-col">
      {successMessage && (
        <SuccessModal
          successMessage={successMessage}
          handleClick={() => setSuccessMessage("")}
        />
      )}

      <form
        className="w-full text-sm flex flex-col gap-5"
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col gap-3">
          <p className="font-bold text-gray-700">Name</p>
          <div className="flex gap-5 w-full max-sm:flex-col">
            <div className="flex flex-col w-1/2 max-sm:w-full">
              <input
                type="text"
                name="first"
                className="border border-gray-600 rounded-md py-2 px-2"
                required
              />
              <label htmlFor="first" className="text-gray-500">
                <span className="text-red-500">*</span> First
              </label>
            </div>
            <div className="flex flex-col w-1/2 max-sm:w-full">
              <input
                type="text"
                name="last"
                className="border border-gray-600 rounded-md py-2 px-2"
                required
              />
              <label htmlFor="last" className="text-gray-500">
                <span className="text-red-500">*</span> Last
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="cnumber" className="font-bold text-gray-700">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="cnumber"
            className="border border-gray-600 rounded-md py-2 px-2"
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="font-bold text-gray-700">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="email"
            className="border border-gray-600 rounded-md py-2 px-2"
            required
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="content" className="font-bold text-gray-700">
            Share your legal concern/query{" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-col">
            <textarea
              rows={5}
              type="text"
              name="content"
              className="border border-gray-600 rounded-md p-2"
              required
            />
            <p className="text-gray-500">
              Please include any information you believe is important to your
              case. We will do our best to answer your questions in a timely
              manner.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-gray-700">Address</p>
          <div className="flex flex-col">
            <input
              type="text"
              name="address_1"
              className="border border-gray-600 rounded-md p-2"
              required
            />
            <label htmlFor="address_1" className="text-gray-500">
              Address Line 1 <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="address_2"
              className="border border-gray-600 rounded-md p-2"
            />
            <label htmlFor="address_2" className="text-gray-500">
              Address Line 2
            </label>
          </div>
          <div className="flex gap-5 w-full max-sm:flex-col">
            <div
              className="flex flex-col w-1/2 max-sm:w-full"
              onClick={handleRegionClick}
            >
              <select
                name="region"
                value={selectedRegion ? selectedRegion.name : ""}
                onChange={handleRegionChange}
                className="border border-gray-600 rounded-md py-2 px-2"
                required
              >
                <option value="" disabled>
                  Select a region
                </option>
                {regions &&
                  regions
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((region) => (
                      <option key={region.code} value={region.name}>
                        {region.name}
                      </option>
                    ))}
              </select>
              <label htmlFor="region" className="text-gray-500">
                Region <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="flex flex-col w-1/2 max-sm:w-full">
              <select
                name="city"
                value={selectedCity.name}
                onChange={handleCityChange}
                className="border border-gray-600 rounded-md py-2 px-2"
                required
              >
                <option value="" disabled>
                  Select a city
                </option>
                {cities &&
                  cities
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((city) => (
                      <option key={city.code} value={city.name}>
                        {city.name}
                      </option>
                    ))}
              </select>
              <label htmlFor="city" className="text-gray-500">
                City <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="flex flex-col w-1/2 max-sm:w-full">
              <select
                name="barangay"
                value={selectedBarangay}
                onChange={handleBarangayChange}
                className="border border-gray-600 rounded-md py-2 px-2"
                required
              >
                <option value="" disabled>
                  Select a barangay
                </option>
                {barangays &&
                  barangays
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((barangay) => (
                      <option key={barangay.code} value={barangay.name}>
                        {barangay.name}
                      </option>
                    ))}
              </select>
              <label htmlFor="barangay" className="text-gray-500">
                Barangay <span className="text-red-500">*</span>
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="comm_pref" className="font-bold text-gray-700">
              Communication Preference
            </label>
            <div className="flex flex-col">
              <select
                name="comm_pref"
                className="border border-gray-600 rounded-md py-2 px-2"
                required
              >
                <option value="" disabled>
                  Select your preference
                </option>
                <option>Email</option>
                <option>Mobile number</option>
              </select>
              <p className="text-gray-500">
                How would you like to be contacted.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-5">
            <p className="font-bold text-gray-700">Disclamer</p>
            <div className="flex items-center gap-3">
              <input name="disclaimer" type="checkbox" />
              <label htmlFor="disclaimer text-gray-500">
                I understand and Agree
              </label>
            </div>
            <p className="text-gray-500">
              I authorize Abril Law Office to process my personal information,
              subject to its commitment to uphold my data privacy rights under
              laws and regulations. (Please click the box to proceed)
            </p>
          </div>
          <div className="flex">
            <button className="bg-[#333333] text-white px-7 py-2 rounded-md hover:opacity-70">
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
