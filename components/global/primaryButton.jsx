import React from "react";

export default function PrimaryButton({ children }) {
  return (
    <>
      <button className="px-4 py-2 bg-secondary rounded-sm text-white hover:bg-primary hover:text-secondary duration-300 cursor-pointer">
        {children}
      </button>
    </>
  );
}
