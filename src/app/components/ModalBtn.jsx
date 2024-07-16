import React from "react";
import Link from "next/link";

const ModalBtn = ({ title, hFunction, style, href }) => {
  const extractedStyle = `py-1 px-2 rounded-md hover:opacity-80 ${style}`;
  return href ? (
    <Link href={href} onClick={hFunction} className={extractedStyle}>
      {title}
    </Link>
  ) : (
    <button onClick={hFunction} className={extractedStyle}>
      {title}
    </button>
  );
};

export default ModalBtn;
