"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type SideBar = {
  titleArray: SideBarTitle[];
};

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const SideBar = ({ titleArray }: SideBar) => {
  let pathname = usePathname().split("/");
  let endUrl: string = titleArray[0].slug.current;

  let rootPath = "";
  if (pathname.length == 2) {
    rootPath += pathname[1];
  } else if (pathname.length > 2) {
    endUrl = pathname.pop()!;
    rootPath += pathname.join("/");
  }

  const [activeSlug, setActiveSlug] = useState(endUrl);

  return (
    <div className="flex flex-col items-end gap-5 justify-start py-4">
      {titleArray.map((titleObject) => (
        <Link
          key={titleObject._id}
          className={classNames(
            titleObject.slug.current == activeSlug
              ? "border-l-4 border-red-700 bg-red-500 scale-105 sm:translate-x-5 text-white"
              : "border-l-4 border-slate-300 bg-slate-200 text-slate-900 hover:border-red-600 hover:text-white hover:bg-red-400 sm:hover:scale-105 active:bg-red-600",
            "group block w-full mx-auto p-4 sm:p-6 shadow-lg space-y-3 ease-out duration-200 rounded-r-lg"
          )}
          onClick={() => {
            setActiveSlug(titleObject.slug.current);
          }}
          href={rootPath + "/" + titleObject.slug.current}
        >
          <div className="flex justify-center sm:justify-end space-x-3">
            <h3 className="text-lg font-semibold">{titleObject.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
