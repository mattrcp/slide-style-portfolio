"use client";

import React from "react";

const TableOfContents = ({ items }) => {
  return (
    <nav className="fixed z-50 hidden gap-6 px-6 py-4 -translate-x-1/2 rounded-full shadow-md md:flex bottom-4 left-1/2 bg-swapBg">
      {items.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className="text-sm duration-200 ease-in-out text-swapText font-satoshi hover:font-semibold"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default TableOfContents;
