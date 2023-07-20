import React from "react";
import "../assets/sosial.css";
import { Icon } from "@iconify/react";

export default function SosialContent() {
  const media_sosial = [
    {
      class: "card1",
      classIcon: "instagram",
      icon: "line-md:instagram",
      link: "https://instagram.com/luthfiyyahnh_?igshid=ZDc4ODBmNjlmNQ==",
    },
    {
      class: "card2",
      classIcon: "linkedin",
      icon: "fa6-brands:linkedin",
      link: "https://www.linkedin.com/in/luthfiyyah-n-h",
    },
  ];

  const media_sosial_down = [
    {
      class: "card3",
      classIcon: "github",
      icon: "octicon:mark-github-16",
      link: "https://github.com/luthfiyyahnh",
    },
    {
      class: "card4",
      classIcon: "facebook",
      icon: "ps:facebook-alt",
      link: "https://m.facebook.com/dhefhiyyach.dhefhiyyach.3/",
    },
  ];

  const handleClick = (e, link) => {
    e.preventDefault();
    window.open(link, "_blank");
  };
  return (
    <div className="flex justify-center">
      <div className="main">
        <div className="up">
          {media_sosial.map((data, index) => (
            <button
              key={index}
              className={data.class}
              onClick={(e) => handleClick(e, data.link)}
            >
              <Icon
                className={`${data.classIcon} w-[35px] h-[35px] lg:w-[50px] lg:h-[50px]`}
                icon={data.icon}
              />
            </button>
          ))}
        </div>
        <div className="down">
          {media_sosial_down.map((data, index) => (
            <button
              key={index}
              className={data.class}
              onClick={(e) => handleClick(e, data.link)}
            >
              <Icon
                className={`${data.classIcon} w-[35px] h-[35px] lg:w-[50px] lg:h-[50px]`}
                icon={data.icon}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
