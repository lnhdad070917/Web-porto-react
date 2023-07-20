import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Cookies from "js-cookie";

const PengunjungWeb = () => {
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userId = Cookies.get("userId");

    if (!isLoading && !userId) {
      fetch("http://localhost:8000/api/visit/update/1", { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
          setCounter(data.pengunjung);
          Cookies.set("userId", "1", { expires: 1 }); // Cookie berlaku selama 1 hari
        })
        .catch((error) => {
          console.error("Failed to update visitor counter:", error);
        });
    } else {
      fetch("http://localhost:8000/api/visit/view/1", {
        method: "GET",
      }).then((response) =>
        response.json().then((data) => {
          setCounter(data.pengunjung);
        })
      );
    }
  }, [isLoading]);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="absolute flex gap-1 items-center md:top-24 md:right-36 top-20 right-10 text-white">
      <Icon icon="mdi:account-eye-outline" width={25} /> {counter}
    </div>
  );
};

export default PengunjungWeb;
