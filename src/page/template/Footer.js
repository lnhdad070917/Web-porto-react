import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        background:
          "linear-gradient(120deg,rgba(67, 38, 100, 255) 25%,rgba(19, 30, 54, 255) 100%)",
      }}
    >
      <div>
        <h2 className="text-white text-center py-5">
          Developed by{" "}
          <span
            style={{ my: 2, fontFamily: "Lobster, cursive", color: "#0eeae2" }}
          >
            Didik Adi Darmawan
          </span>
        </h2>
      </div>
    </div>
  );
}
