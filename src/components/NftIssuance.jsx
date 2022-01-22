import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaBuilding } from "react-icons/fa";
import { MdEmail, MdLocationPin, MdBusinessCenter } from "react-icons/md";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { Checkmark } from "react-checkmark";
const NftIssuance = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    registeredDate: "",
    companyName: "",
    companyEmail: "",
    companyAddress: "",
    typeOfBusiness: "",
    documents: [],
  });

  const FormTitles = [
    "Not registered yet?",
    "Company Info",
    "Upload Documents",
    "Complete",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <PageOne />;
    } else if (page === 1) {
      return <PageTwo formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <PageThree formData={formData} setFormData={setFormData} />;
    } else {
      return <PageFour />;
    }
  };
  return (
    <div className="form flex flex-col justify-center">
      <div className="progressbar justify-center text-center mx-auto mt-10">
        <div
          className="flex justify-center"
          style={{
            width:
              page === 0
                ? "0%"
                : page == 1
                ? "33.3%"
                : page == 2
                ? "66.7%"
                : "100%",
          }}
        ></div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white font-semibold text-3xl mb-10">
          {FormTitles[page]}
        </h1>
        <div className="mb-7">{PageDisplay()}</div>
        {page === 0 ? (
          <button
            type="button"
            className="text-white text-lg font-semibold justify-center flex shadow-lg shadow-blue-500/50 mx-auto   mt-2 py-3 px-9 bg-blue-500  hover:bg-blue-600 rounded-2xl cursor-pointer"
            onClick={() => setPage(1)}
          >
            <p>Register</p>
          </button>
        ) : page >= 1 && page <= 2 ? (
          <div className="flex flex-1">
            <button onClick={() => setPage(page - 1)} className=" text-white text-base font-semibold py-2 flex items-center justify-center  bg-blue-500  hover:bg-blue-600 rounded-lg cursor-pointer w-24 mx-6"><BiChevronLeft />Previous</button>
            <button onClick={() => setPage(page + 1)} className="text-white text-base font-semibold py-2 flex items-center justify-center  bg-blue-500  hover:bg-blue-600 rounded-lg cursor-pointer w-24 mx-6 ">Next<BiChevronRight /></button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

function PageOne() {
  return (
    <div>
      <div className="w-1/3 flex mx-auto flex-none">
        <img
          src="https://res.cloudinary.com/dlidl2li4/image/upload/v1642849271/bondefi/undraw_empty_street_sfxm_f3yvgx.svg"
          alt="NFT"
        />
      </div>
      <div className="py-3 justify-center flex flex-col">
        <p className="text-center text-white text-lg mt-5">
          Register your business here!
        </p>
      </div>
    </div>
  );
}

function PageTwo({ formData, setFormData }) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <form>
        <div>
          <label className="text-white">Date Registered</label>
          <div className="flex flex-1">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="rounded-md py-2 px-3"
            />
          </div>
        </div>

        <div>
          <label>Company Name</label>
          <div className="relative mt-1">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <FaBuilding />
            </div>
            <input
              type="text"
              id="email-adress-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-400 focus:border-cyan-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Apple"
            ></input>
          </div>
        </div>

        <div>
          <label className="text-white">Email</label>
          <div className="relative mt-1">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <MdEmail />
            </div>
            <input
              type="text"
              id="email-adress-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-400 focus:border-cyan-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="abc@gmail.com"
            ></input>
          </div>
        </div>

        <div>
          <label className="text-white">Address</label>
          <div className="relative mt-1">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <MdLocationPin />
            </div>
            <input
              type="text"
              id="email-adress-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-400 focus:border-cyan-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Georgetown, Penang"
            ></input>
          </div>
        </div>

        <div>
          <label className="text-white">Type of Business</label>
          <div className="relative mt-1">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <MdBusinessCenter />
            </div>
            <input
              type="text"
              id="email-adress-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-400 focus:border-cyan-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Retail"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}

function PageThree({ formData, setFormData }) {
  return (
    <div className="dragndrop flex items-center justify-center">
      <div className="">
        <img
          src="https://res.cloudinary.com/dlidl2li4/image/upload/v1642864837/bondefi/undraw_add_files_re_v09g_lvfb7b.svg"
          alt="upload"
          className="w-44"
        ></img>
      </div>
    </div>
  );
}

function PageFour({ formData, setFormData }) {
  return (
    <div>
      <div>
        <Checkmark size="xxLarge" color="#4ade80" />
      </div>

      <div>
          Information

      </div>
    </div>
  );
}

export default NftIssuance;
