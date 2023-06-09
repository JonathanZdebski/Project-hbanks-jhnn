import React from "react";
import styles from "../style";
import arrowup from "../assets/arrowup.svg";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[142px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
          <span className="text-gradient">Criar</span>
        </p>
        <img src={arrowup} className="w-[23px] h-[23px] object-contain" />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">Conta</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
