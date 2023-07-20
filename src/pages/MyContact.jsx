import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import "./../assets/contactMe.css";
import FormComponent from "../components/FormComponent";

export default function ContactMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const media_sosial = [
    {
      icon: "fa-brands:instagram-square",
      link: "https://instagram.com/luthfiyyahnh_?igshid=ZDc4ODBmNjlmNQ==",
    },
    {
      icon: "bi:linkedin",
      link: "https://www.linkedin.com/in/luthfiyyah-n-h",
    },
    {
      icon: "fa:github-square",
      link: "https://github.com/luthfiyyahnh",
    },
    {
      icon: "brandico:facebook-rect",
      link: "https://m.facebook.com/dhefhiyyach.dhefhiyyach.3/",
    },
  ];
  const handleClick = (e, link) => {
    e.preventDefault();
    window.open(link, "_blank");
  };
  return (
    <div style={{ background: "rgba(19, 30, 54, 255)" }}>
      <div className="pt-20"></div>
      <div className="h-full flex items-center">
        <div className="w-screen flex-column">
          <h2 className="text-center text-white text-3xl">Contact Me</h2>
          <div className="md:flex">
            <div className="md:w-1/2 p-10">
              <FormComponent />
            </div>
            <div className="md:w-1/2 p-10 flex items-center">
              <div>
                <div className="flex gap-2">
                  <div className="flex items-center">
                    <Icon
                      style={{ color: "rgb(168, 85, 247)" }}
                      icon="octicon:person-fill-24"
                      width={45}
                    />
                  </div>
                  <h2 className="text-white sm:text-2xl py-4">
                    Luthfiyyah Nurhasannah
                  </h2>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center">
                    <Icon
                      style={{ color: "rgb(168, 85, 247)" }}
                      icon="basil:gmail-solid"
                      width={45}
                    />
                  </div>
                  <h2 className="text-white sm:text-2xl py-4">
                    luthfiyyahnurhasanah070917@gmail.com
                  </h2>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center">
                    <Icon
                      style={{ color: "rgb(168, 85, 247)" }}
                      icon="solar:map-point-bold"
                      width={45}
                    />
                  </div>
                  <h2 className="text-white sm:text-2xl py-4">
                    Dayeuhluhur, Cilacap, Jawa Tengah
                  </h2>
                </div>
                <div className="flex items-center mt-4">
                  <h2 className="text-stone-500 text-2xl text-stone-500">
                    Media Sosial{" "}
                  </h2>
                  <div className="bg-[#a855f7] w-7 h-[2px] mx-4"></div>
                  {media_sosial.map((data, index) => (
                    <button
                      key={index}
                      className="p-1 text-stone-500 hover:text-[#a855f7]"
                      onClick={(e) => {
                        handleClick(e, data.link);
                      }}
                    >
                      <Icon width={35} icon={data.icon} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-20"></div>
    </div>
  );
}
