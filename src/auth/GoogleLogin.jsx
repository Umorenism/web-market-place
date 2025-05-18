import React, { useState } from "react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import logo from "../assets/welcome.png";
import google from "../assets/google.png";

export const GoogleLogin = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (onLogin) onLogin("/");
    }, 2000); // Simulated login delay
  };

  return (
    <div className="bg-[#0b0f1d] h-screen flex justify-center items-center">
      <div className="relative bg-bgdark-mode w-[412px] h-[917px] rounded-xl overflow-hidden shadow-xl">
        {/* Background Graphic */}
        <div className="absolute inset-0 h-[611px] bg-[url('https://c.animaapp.com/map5mst0K74gOd/img/vector-1.svg')] bg-cover" />

        {/* Logo */}
        <Card className="absolute top-[269px] left-1/2 transform -translate-x-1/2 w-[122px] h-[122px] shadow-[0px_18px_30.6px_#00000080] bg-cover border-none bg-[url('https://c.animaapp.com/map5mst0K74gOd/img/subtract.svg')]">
          <img src={logo} alt="Logo" className="w-[150px] h-[150px]  object-contain" />
        </Card>

        {/* Heading */}
        <div className="absolute w-[90%] max-w-[500px] top-[480px] left-1/2 transform -translate-x-1/2 text-white text-center font-semibold text-lg leading-relaxed">
          Make good use of your time
          <br />
          Sign in to Sherdion and start
          <br />
          making money.
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 z-10">
            <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Google Sign-in Button */}
        {!loading && (
          <Button
            onClick={handleGoogleLogin}
            variant="outline"
            className="absolute bottom-[180px] left-1/2 transform -translate-x-1/2 w-[300px] h-[58px] rounded-lg border border-[#abd7f1] bg-gradient-to-t from-[#eaf5fb] to-[#eaf5fb] p-0"
          >
            <div className="flex items-center justify-center gap-4 w-full">
              <img src={google} alt="Google Icon" className="w-6 h-6" />
              <span className="text-blue-900 font-semibold">Signup/Login with Google</span>
            </div>
          </Button>
        )}
      </div>
    </div>
  );
};
