import React from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FormInputProps } from "@/types";

const FormInput = ({
  placeholder,
  type,
  label,
  name,
  value,
}: FormInputProps) => {
  return (
    <div className="relative mb-5">
      <input
        className="w-full p-3 pl-10 rounded-xl border-2 border-black-25 outline-none placeholder:text-sm placeholder:tracking-wider placeholder:text-black-25 focus:border-blue peer transition tracking-wider text-sm"
        placeholder={placeholder}
        type={type || "text"}
        name={name}
        id={name}
      />
      <label
        htmlFor={name}
        className="absolute top-1/2 left-3 -translate-y-1/2 text-black-80 peer-focus:text-blue transition"
      >
        {name === "fullName" ? (
          <FaUser />
        ) : name === "email" ? (
          <MdEmail />
        ) : name === "password" ? (
          <RiLockPasswordFill />
        ) : (
          "label"
        )}
      </label>
    </div>
  );
};

export default FormInput;
