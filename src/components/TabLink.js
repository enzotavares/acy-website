import arrow from "../assets/arrow_orange.png";
import style from "../css/animation.css";
import { HorizontalLogo } from "../atoms";
import { useState } from "react";

const TabLink = ({ title, content, link = "/", src, src_hover, logoText }) => {
  let [active, setActive] = useState(false);
  return (
    <div
      onClick={() => {
        window.location.href = link;
      }}
      onMouseEnter={() => {
        setActive(true);
      }}
      onMouseLeave={() => {
        setActive(false);
      }}
      className="p-5 moveTopRightOnHover text-gray-100 rounded-md border-solid border-1 border border-orange grayscale filter hover:grayscale-0 cursor-pointer rounded-lg relative cursor-pointer"
    >
      <img
        alt="goto"
        src={arrow}
        style={{ width: 30, height: 30 }}
        className="absolute filter hover:grayscale-0"
      />
      <div className="flex flex-col items-center">
        <h2>{title}</h2>
        <div className="hover:brightness-50">
          <HorizontalLogo
            src={src}
            src_hover={src_hover}
            logoText={logoText}
            active={active}
          ></HorizontalLogo>
        </div>
        <div className="px-5 lg:px-10">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default TabLink;