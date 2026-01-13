import React from "react";

function ContentItem({ icon, tittle, Description }) {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex flex-row items-center gap-1">
        <div className="text-[64px] sm:text-[80px] md:text-[96px] text-[#E62727]">
          {icon}
        </div>
        <p className="text-lg md:text-lg  dark:text-light">{tittle}</p>
      </div>
      <p className="border-l-2 pl-4 dark:border-l-white border-l-black md:text-lg text-sm font-light dark:text-light">
        {Description}
      </p>
    </div>
  );
}

export default ContentItem;
