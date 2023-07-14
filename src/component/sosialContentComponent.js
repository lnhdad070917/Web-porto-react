import React from "react";
import "../assets/sosial.css";
import { Icon } from "@iconify/react";

export default function SosialContent() {
  const media_sosial = [
    {
      class: "card1",
      classIcon: "instagram",
      icon: "line-md:instagram",
      link: "https://instagram.com/didikad_17?igshid=MzRlODBiNWFlZA==",
    },
    {
      class: "card2",
      classIcon: "linkedin",
      icon: "fa6-brands:linkedin",
      link: "https://www.linkedin.com/in/didik-adi-darmawan-702653191/",
    },
  ];

  const media_sosial_down = [
    {
      class: "card3",
      classIcon: "github",
      icon: "octicon:mark-github-16",
      link: "https://github.com/lnhdad070917",
    },
    {
      class: "card4",
      classIcon: "facebook",
      icon: "ps:facebook-alt",
      link: "https://www.facebook.com/didik.a.darmawan.3/",
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
