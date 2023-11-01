import groq from "groq";

import { sanityFetch } from "@/utils/sanity/sanityFetch";
import SideBar from "../../../components/SideTabBar/SideBar";

const getAllAboutTitles = async () => {
  const query1 = groq`
  *[_type=='pages' && 'About' in pageCategory[]->title]{
      _id,
      title,
      slug
  }
  `;

  const getAllAboutTitles: SideBarTitle[] = await sanityFetch({
    query: query1,
  });

  return getAllAboutTitles;
};

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const allAboutTitles: SideBarTitle[] = await getAllAboutTitles();

  return (
    <section className="mt-36 max-w-7xl m-auto px-5 mb-36">
      {/* Title */}
      <h1 className="text-4xl md:text-7xl">About Us</h1>
      <div className="flex flex-row w-full my-8">
        <hr className="w-1/6 h-1 dark:bg-blue-700" />
        <hr className="w-1/2 h-1 dark:bg-red-700" />
      </div>

      {/* Block Quote */}
      <div className="hidden sm:block text-lg p-5 italic bg-slate-100 rounded-lg drop-shadow-lg mb-10">
        <p className="mb-3">
          <span className="font-bold text-2xl mr-2">"</span>
          The ultimate aim of the art of karate lies not in victory or defeat,
          but in the perfection of the characters of its participants.
          <span className="font-bold text-2xl ml-2">"</span>
        </p>
        <span className="font-bold text-right w-full ml-10">
          - Gichin Funakoshi, Father of Shotokan Karate
        </span>
      </div>

      {/* Body */}
      <div className="grid grid-cols-4 mb-10 gap-5 sm:gap-10">
        {/* Menu */}
        <div className="col-span-4 sm:col-span-1">
          <SideBar titleArray={allAboutTitles} />
        </div>

        {/* body */}
        <div className="col-span-4 sm:col-span-3">{children}</div>
      </div>
    </section>
  );
}
