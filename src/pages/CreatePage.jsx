import { ArrowLeftIcon } from "lucide-react";
import React from "react";

import sort from "../assets/sort.png";
import { Link } from "react-router-dom";
export default function CreatePage() {
  return (
    <div className="bg-[#0b0f1d] flex justify-center min-h-screen">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full max-w-[412px] z-50 bg-bgdark-mode px-4 py-3 shadow-md flex items-center gap-4">
        <button className="bg-transparent border-none p-0">
          <ArrowLeftIcon className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-lg font-bold">Pools</h1>
      </header>
      <div className="pt-[70px] pb-4 overflow-y-auto flex-1 h-screen">
        <div className="px-4">
          <p className="text-sm text-white mb-4">
            Complete tasks and receive reward
          </p>
        </div>
        {/* Tabs and sort icon */}
        <div  className="flex items-center justify-between mb-4 p-3">
          <div className="flex gap-10 items-center">
            <h1 className="text-white">Pools created</h1>
            <h1 className="text-white">Active pool</h1>
          </div>
          <div className="h-8 w-10 border border-white rounded-md flex items-center justify-center">
            <img className="w-6 h-6" alt="Sort" src={sort} />
          </div>
        </div>

        {/* content */}
        <div className="min-h-[400px] w-full flex items-center justify-center">
          <p className="text-white">
            All pool created by you will be shown here
          </p>
        </div>
        <div className="w-full justify-center items-center p-4">
          <Link to="/createpools" className="w-full flex justify-center">
          <button className="w-full text-white p-4 rounded-md bg-gradient-to-r from-[#3B82F6] to-[#9333EA]">
            Create Pool
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
