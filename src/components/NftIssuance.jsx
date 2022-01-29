import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiFillIdcard } from "react-icons/ai";
import { FaBuilding, FaMoneyBillAlt } from "react-icons/fa";
import { MdEmail, MdLocationPin, MdBusinessCenter } from "react-icons/md";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { Checkmark } from "react-checkmark";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";
import axios from "axios";

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

  return (
    <div className="page2">
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
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    companyAddress: event.target.value,
                  })
                }
              ></input>
            </div>
          </div>
          
        </div>
      </form>
    </div>
  );
}

function PageThree({ formData, setFormData, props }) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: ".pdf",
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>{file.path}</li>
  ));

  const test = () => {
    console.log(acceptedFiles[0]);
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);

    //call api
    console.log(formData);
    axios
      .post(
        "https://bsjvr7vsnk.execute-api.ap-southeast-1.amazonaws.com/prod/file-upload",
        formData
      )
      .then(() => {
        console.log("success");
      });
  };

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
        <ul>{typeof files}</ul>
      </aside>
    </div>
  );
}

function PageFour({ formData, setFormData }) {
  const [isLoading, setIsLoading] = useState(false);
  const [ipfsuri, setipfsuri] = useState("");
  const [contractAddress2, setContractAddress2] = useState("");
  const [tokenContract, setTokenContract] = useState("");
  const contractFunction = async () => {
    try {
      if (!window.ethereum) {
        return alert("No wallet found. Please  install metamask");
      } else {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const signerAddress = await signer.getAddress();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        setipfsuri("ipfs.com/ipfs/QmXoypizjW3W");
        setContractAddress2("0xf4d288...F9164c092421E");
        setTokenContract("0xb67356...FH732B92337G");

        const contractHash = await contract.create(
          signerAddress,
          "https://hardhat.org/getting-starte"
        );

        console.log(contractHash);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <Checkmark size="xxLarge" color="#4ade80" />
      </div>

      <div className="w-[40rem] mt-14 text-gray-300 h-20 px-4 py-3 border border-slate-300 rounded-md flex items-center justify-between overflow-hidden">
        <div>
          <p className="font-semibold flex flex-row">
            IPFS uri: <p className="ml-2">{ipfsuri}</p>
          </p>
          <p className="font-semibold flex flew-row ">
            contract address: <p className="ml-2">{contractAddress2}</p>
          </p>
          <p className="font-semibold flex flew-row ">
            token contract: <p className="ml-2">{tokenContract}</p>
          </p>
        </div>
        <div className="flex flex-row">
          <button
            type="button"
            className="w-[4rem] my-5 justify-center flex shadow-lg shadow-blue-500/50 font-semibold text-sm mt-2 p-2 bg-cyan-500  hover:bg-cyan-600 rounded-lg cursor-pointer"
          >
            Stake
          </button>
          <button
            type="button"
            onClick={contractFunction}
            className="w-[4rem] ml-2 my-5 justify-center flex shadow-lg shadow-blue-500/50 font-semibold text-sm mt-2 p-2 bg-cyan-500  hover:bg-cyan-600 rounded-lg cursor-pointer"
          >
            Mint{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NftIssuance;
