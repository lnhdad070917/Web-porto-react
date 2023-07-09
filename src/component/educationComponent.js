import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import logoUMP from "../assets/img/Logo_UMP.png";
import logoBangkit from "../assets/img/Logo_Bangkit.png";
import logoCamp404 from "../assets/img/camp404.png";
import logoCloud from "../assets/img/cloud.png";
import logoDicoding from "../assets/img/dicoding.png";
import logoProgrammerZamanNow from "../assets/img/programmerzamannow.png";
import logoSantriKoding from "../assets/img/santrikoding.jpeg";
import logoSkilvul from "../assets/img/skilvul.jpg";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

const technicalDevelopmentData = [
  {
    logo: logoCamp404,
    nama: "CAMP404",
  },
  {
    logo: logoCloud,
    nama: "Cloud Skill Boost",
  },
  {
    logo: logoDicoding,
    nama: "Dicoding",
  },
  {
    logo: logoProgrammerZamanNow,
    nama: "Programmer Zaman Now",
  },
  {
    logo: logoSantriKoding,
    nama: "Santri Coding",
  },
  {
    logo: logoSkilvul,
    nama: "Skilvul",
  },
];

export default function Education() {
  return (
    <div>
      <div>
        <h1 className="text-2xl text-white pb-3">Primary Education</h1>
        <div className="flex justify-evenly flex-wrap">
          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography className="text-center" color="inherit">
                  Universitas Muhammadiyah Purwokerto
                </Typography>
              </React.Fragment>
            }
          >
            <Button>
              <img className="w-[80px]" src={logoUMP} alt="logoUMP" />
            </Button>
          </HtmlTooltip>
          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">Bangkit Academy 2023</Typography>
              </React.Fragment>
            }
          >
            <Button className="bg-gray-300">
              <img
                className="h-[55px] bg-white p-2"
                src={logoBangkit}
                alt="logoBangkit"
              />
            </Button>
          </HtmlTooltip>
          {/* saat hover menampilkan nama */}
        </div>
      </div>
      <h1 className="text-2xl text-white py-3">Technical Development</h1>
      <div className="flex justify-center flex-wrap">
        {technicalDevelopmentData.map((data, index) => (
          <HtmlTooltip
            key={index}
            title={
              <React.Fragment>
                <Typography className="text-center" color="inherit">
                  {data.nama}
                </Typography>
              </React.Fragment>
            }
          >
            <Button>
              <img
                className="w-[40px] h-[40px] rounded-full "
                src={data.logo}
                alt="Logo"
              />
            </Button>
          </HtmlTooltip>
        ))}
        {/* saat hover menampilkan nama */}
      </div>
    </div>
  );
}
