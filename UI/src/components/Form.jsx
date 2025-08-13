import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { countryToCode } from "./utlis/dataSet";
import { countryToUrdu } from "./utlis/dataSet";
import { countryToHindi } from "./utlis/dataSet";

function Form({ language, total, setTotal }) {
  const [intialData, setIntialData] = useState({
    name: "",
    country: "India",
    duroodCount: "",
  });
  const inputRef  = useRef(null);

  const placeholders = {
    eng: {
      name: "Enter Your Name",
      country: "Select Your Country",
      duroodCount: "Number of Durood",
    },
    hindi: {
      name: "अपना नाम दर्ज करें",
      country: "अपना देश चुनें",
      duroodCount: "दरूद की संख्या",
    },
    urdu: {
      name: "اپنا نام درج کریں",
      country: "اپنا ملک منتخب کریں",
      duroodCount: "درود کی تعداد",
    },
  };

  const apiUrl = import.meta.env.VITE_API_URI;

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submit", intialData);

    if(intialData.duroodCount > 10000){
      alert("Sorry for Inconvenience, Please submit into small parts such as 10,000");
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}/submit`, {
        name: intialData.name.trim(),
        country: intialData.country,
        duroodCount: Number(intialData.duroodCount),
      });

      console.log("Success:", response.data.info);
      alert("submitted successfully!");

      setIntialData({
        name: "",
        country: "",
        duroodCount: "",
      });

      const totalRes = await axios.get("http://localhost:5000/api/total");
      setTotal(totalRes.data.info);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There is some error, Please try again!");
    }
  };


    const handleButtonClick = (e) => {
    e.preventDefault(); // prevent form submit if needed
    inputRef.current?.focus();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIntialData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {}, [total]);

  return (
    <div className="min-h-[50vh] flex flex-col justify-center items-center">
      <div>
        <input
  type="range"
  min={0}
  max={15000000}
  value={total}
  readOnly
  className="w-[85vw] md:w-[70vw] lg:w-[50vw] h-3 rounded-full bg-gray-200 appearance-none accent-green-500 relative overflow-hidden my-5"
  style={{
    background: `linear-gradient(to right, #22c55e ${(total / 15000000) * 100}%, #e5e7eb ${(total / 15000000) * 100}%)`
  }}
/>
      </div>

      <button
        type="submit"
         onClick={handleButtonClick}
        className="bg-[#FFF8DB] text-[#063626] px-20 py-2 rounded-4xl pb-3 font-bold"
      >
        {language === "eng" && "SUBMIT DUROOD"}
        {language === "hindi" && "दरूद जमा करें"}
        {language === "urdu" && "درود جمع کریں"}
      </button>

      <div className="p-10 mt-5 w-[90vw] md:w-[75vw] lg:w-[55vw] bg-[#FFF8DB] rounded-2xl">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          {/* Title */}
          {language === "eng" && (
            <h1 className="text-3xl font-bold text-center">
              Submit Your Durood
            </h1>
          )}
          {language === "hindi" && (
            <h1 className="text-3xl font-bold text-center">
              अपना दरूद सबमिट करें
            </h1>
          )}
          {language === "urdu" && (
            <h1 className="text-3xl font-bold text-center">
              اپنا درود جمع کریں
            </h1>
          )}

          {/* Name */}
          <input
            type="text"
            ref={inputRef}
            name="name"
            className={`${
              language === "urdu" ? "mt-8" : "mt-6"
            } p-1 pb-2 px-2 border-0 shadow rounded-md bg-white text-black  font-sans`}
            placeholder={placeholders[language]?.name || placeholders.eng.name}
            dir={language === "urdu" ? "rtl" : "ltr"}
            value={intialData.name}
            onChange={handleChange}
          />

          

          {/* Durood Count */}
          <input
            required
            type="number"
            name="duroodCount"
            className="mt-4 p-1 px-2 border-0 shadow rounded-md bg-white pb-2  font-sans"
            placeholder={
              placeholders[language]?.duroodCount ||
              placeholders.eng.duroodCount
            }
            dir={language === "urdu" ? "rtl" : "ltr"}
            value={intialData.duroodCount}
            onChange={handleChange}
          />

          {/* Country */}

          <select
            name="country"
            className="mt-4 p-1 px-2 border-0 shadow rounded-md bg-white pb-2  font-sans"
            dir={language === "urdu" ? "rtl" : "ltr"}
            value={intialData.country}
            onChange={handleChange}
          >
            {/* <option value="">
              {placeholders[language]?.country || placeholders.eng.country}
            </option> */}
            <option value="India" selected>
              {language == "eng" && "India"}
              {language == "hindi" && "भारत"}
              {language == "urdu" && "انڈیا"}
            </option>
            {Object.keys(countryToCode).map((country) => (
              
              <option key={country} value={country}>
                {language == "eng" && country}
                {language == "hindi" && countryToHindi[country]}
                {language == "urdu" && countryToUrdu[country]}
              </option>
            ))}
          </select>

          {/* Submit Button */}
          <div className="flex justify-center font-bold">
            <button
              type="submit"
              className="text-white bg-[#063626] px-20 py-2 rounded-4xl mt-8 pb-3"
            >
              {language === "eng" && "SUBMIT"}
              {language === "hindi" && "जमा करें"}
              {language === "urdu" && " جمع کریں"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
