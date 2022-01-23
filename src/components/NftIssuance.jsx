import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiFillIdcard } from "react-icons/ai";
import { FaBuilding, FaMoneyBillAlt } from "react-icons/fa";
import { MdEmail, MdLocationPin, MdBusinessCenter } from "react-icons/md";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { Checkmark } from "react-checkmark";

const NftIssuance = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    registeredDate: "",
    companyName: "",
    companyEmail: "",
    typeOfBusiness: "",
    companyAddress: "",
    industry: "",
    startupCapital: 0,
    uen: "",
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
            <button
              onClick={() => setPage(page - 1)}
              className=" text-white text-base font-semibold py-2 flex items-center justify-center  bg-blue-500  hover:bg-blue-600 rounded-lg cursor-pointer w-24 mx-6"
            >
              <BiChevronLeft />
              Previous
            </button>
            <button
              onClick={() => setPage(page + 1)}
              className="text-white text-base font-semibold py-2 flex items-center justify-center  bg-blue-500  hover:bg-blue-600 rounded-lg cursor-pointer w-24 mx-6 "
            >
              Next
              <BiChevronRight />
            </button>
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

  const convertDate = (date) => {
    var newDate = date.toLocaleString();
    setStartDate(date);
    setFormData({ ...formData, registeredDate: newDate });
  };

  const handleSelect = (date) => {
    return date;
  };

  return (
    <div>
      <form className="w-full max-w-lg">
        <div className="flex flex-nowrap">
          <div className="w-full md:w-1/2 mx-3">
            <label className="text-white">Date Registered</label>
            <div className="flex flex-1">
              <DatePicker
                selected={startDate}
                onChange={(date) => convertDate(date)}
                className="rounded-md py-2 px-3"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 mx-3">
            <label className="text-white">Company Name</label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <FaBuilding />
              </div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-400 focus:border-cyan-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Apple"
                onChange={(event) =>
                  setFormData({ ...formData, companyName: event.target.value })
                }
              ></input>
            </div>
          </div>
        </div>
        <div className="flex flex-nowrap">
          <div className="w-full md:w-1/2 mx-3">
            <label className="text-white">Email</label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <MdEmail />
              </div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-400 focus:border-cyan-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="abc@gmail.com"
                onChange={(event) =>
                  setFormData({ ...formData, companyEmail: event.target.value })
                }
              ></input>
            </div>
          </div>
          <div className="w-full md:w-1/2 mx-3">
            <label className="text-white">Type of Business</label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
              <select
                id="typeofbusiness"
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    typeOfBusiness: event.target.value,
                  })
                }
                className="bg-gray-50 border h-11 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-400 focus:border-cyan-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Pte Ltd</option>
                <option>Partnership</option>
                <option>LLC</option>
                <option>Sole Proprietor</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-nowrap">
          <div className="w-full md:w-1/2 mx-3">
            <label className="text-white">Industry</label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <MdBusinessCenter />
              </div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-400 focus:border-cyan-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Retail"
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    industry: event.target.value,
                  })
                }
              ></input>
            </div>
          </div>
          <div className="w-full md:w-1/2 mx-3">
            <label className="text-white">Startup Capital</label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <FaMoneyBillAlt />
              </div>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-400 focus:border-cyan-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="$50,000"
                step="1000"
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    startupCapital: event.target.value,
                  })
                }
              ></input>
            </div>
          </div>
        </div>
        <div className="flex flex-nowrap">
          <div className="w-full md:w-1/2 mx-3">
            <label className="text-white">UEN</label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <AiFillIdcard />
              </div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-400 focus:border-cyan-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="T09LL0001B"
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    uen: event.target.value,
                  })
                }
              ></input>
            </div>
          </div>
          <div className="w-full md:w-1/2 mx-3"></div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full mx-3">
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
        </div>
      </form>
    </div>
  );
}

function PageThree({ formData, setFormData, props }) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path}
    </li>
  ));

  return (
    <div>
      <div
        {...getRootProps({
          className: "dragndrop flex items-center justify-center",
        })}
      >
        <input {...getInputProps()} />
        <div className="">
          <img
            src="https://res.cloudinary.com/dlidl2li4/image/upload/v1642864837/bondefi/undraw_add_files_re_v09g_lvfb7b.svg"
            alt="upload"
            className="w-44"
          ></img>
        </div>
      </div>
      <aside className="text-white">
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </div>
  );
}

function PageFour({ formData, setFormData }) {
  return (
    <div>
      <div>
        <Checkmark size="xxLarge" color="#4ade80" />
      </div>

      <div>Information</div>
    </div>
  );
}

export default NftIssuance;
