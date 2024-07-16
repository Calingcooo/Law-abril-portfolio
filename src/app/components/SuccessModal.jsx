import React from "react";

//components
import ModalBtn from "./ModalBtn";
import LottieConverter from "../utility/lottieConverter";
import successAnimation from "../assets/successAnimation";

const SuccessModal = ({ successMessage, handleClick }) => {
  return (
    <div className="fixed bg-black w-full  inset-0 bg-opacity-40 backdrop-blur-[2px] flex justify-center items-center z-[1000] overflow-hidden max-sm:px-5">
      <div className="w-[600px] h-[500px] flex justify-center items-center flex-col bg-white rounded-lg p-10 gap-5">
        <LottieConverter
          animationData={successAnimation}
          id={"About_us"}
          size={"w-72 h-72"}
        />
        <h1 className="font-semibold text-2xl text-gray-800">{successMessage}</h1>

        <ModalBtn
          hFunction={handleClick}
          style={"bg-green-500 text-white !px-5 !py-3"}
          title={"OK"}
        />
      </div>
    </div>
  );
};

export default SuccessModal;
