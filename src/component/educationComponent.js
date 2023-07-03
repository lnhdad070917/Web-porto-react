import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

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
    logo: "logo 1",
    nama: "Nama1",
  },
  {
    logo: "logo 2",
    nama: "Nama2",
  },
  {
    logo: "logo 3",
    nama: "Nama3",
  },
  {
    logo: "logo 4",
    nama: "Nama4",
  },
  {
    logo: "logo 5",
    nama: "Nama5",
  },
  {
    logo: "logo 6",
    nama: "Nama6",
  },
];

export default function Education() {
  return (
    <div>
      <div>
        <h1 className="text-2xl text-white pb-3">Primary Education</h1>
        <div className="flex justify-evenly">
          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">Tooltip UMP</Typography>
                <em>{"And here's"}</em> <b>{"some"}</b>{" "}
                <u>{"amazing content"}</u>. {"It's very engaging. Right?"}
              </React.Fragment>
            }
          >
            <Button>Logo UMP</Button>
          </HtmlTooltip>
          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">Tooltip Bangkit</Typography>
                <em>{"And here's"}</em> <b>{"some"}</b>{" "}
                <u>{"amazing content"}</u>. {"It's very engaging. Right?"}
              </React.Fragment>
            }
          >
            <Button>Logo Bangkit</Button>
          </HtmlTooltip>
          {/* saat hover menampilkan nama */}
        </div>
      </div>
      <div>
        <h1 className="text-2xl text-white py-3">Technical Development</h1>
        {technicalDevelopmentData.map((data, index) => (
          <HtmlTooltip
            key={index}
            title={
              <React.Fragment>
                <Typography color="inherit">Tooltip {data.nama}</Typography>
                <em>{"And here's"}</em> <b>{"some"}</b>{" "}
                <u>{"amazing content"}</u>. {"It's very engaging. Right?"}
              </React.Fragment>
            }
          >
            <Button>{data.logo}</Button>
          </HtmlTooltip>
        ))}
        {/* saat hover menampilkan nama */}
      </div>
    </div>
  );
}
