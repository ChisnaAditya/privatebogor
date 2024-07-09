import React, { useEffect } from "react";
import logo from "../assets/LOGO LC.png";
import axios from "axios";

export default function Terimakasih() {
  useEffect(() => {
    // axios.get("https://bod.languagecenter.id/bogor-private").then((res) => {
    //   console.log(res);
    // });
  }, []);
  return (
    <div className="min-h-screen max-w-lg mx-auto flex flex-col justify-center items-center">
      <img src={logo} alt="logo kampung inggris lc" className="w-[200px]" />
      <h1 className="text-[5rem]">Terimakasih!</h1>
      <p className="text-center">
        Sudah mengisi formulir perndaftaran{" "}
        <b>Program Private dan Semi Private Kampung Inggris LC Bogor</b>, admin
        kami akan segera menghubungi kakak melalui whatsapp maksimal 1x24 jam
      </p>
    </div>
  );
}
