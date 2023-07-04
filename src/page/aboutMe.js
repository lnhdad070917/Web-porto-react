import React from "react";

export default function AboutMe() {
  return (
    <div
      className="mt-[-65px] h-screen"
      style={{
        background:
          "linear-gradient(120deg,rgba(19, 30, 54, 255) 25%,rgba(67, 38, 100, 255) 100%)",
      }}
    >
      <div className="pt-[150px]">
        <div className="flex justify-evenly items-center">
          <div>
            <h2>Fotoku</h2>
          </div>
          <div>
            <h2>About Me</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
