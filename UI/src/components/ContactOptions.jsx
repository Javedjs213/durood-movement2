import React from "react";
import { MdEmail } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

export default function ContactOptions({onClose, visibility}) {

  return (
    visibility && (
      <div className={`fixed inset-0 flex items-center justify-center bg-[#fff]/90 backdrop-blur-lg text-[#063626]"`}>
        {/* Card container */}
        <div className="bg-white rounded-xl shadow-xl p-6 w-80 relative animate-fadeIn">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 hover:text-gray-700 transition"
          >
            <IoMdClose size={22} />
          </button>

          <h2 className="text-lg font-bold mb-4 text-center text-[#063626]">
            Contact Us
          </h2>

          {/* Email options */}
          <div className="flex flex-col gap-3">
            <a
              href="mailto:eduqalb@gmail.com"
              className="flex items-center gap-1 p-3 rounded-lg hover:bg-gray-100 transition"
            >
              <MdEmail className="text-[#063626] text-3xl mt-2.5" />
              <span className="text-[#063626]">eduqalb@gmail.com</span>
            </a>


            
            <a
              href="mailto:shreefjunior10@gmail.com"
              className="flex items-center gap-1 p-3 rounded-lg hover:bg-gray-100 transition mt-[-30px]"
            >
              <MdEmail className="text-[#063626] text-3xl mt-2.5" />
              <span className="text-[#063626]">shreefjunior10@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    )
  );
}
