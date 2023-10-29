import { PortableText } from "@portabletext/react";
import groq from "groq";

import { RichTextComponents } from "@/components/RichTextComponents";
import { sanityFetch } from "@/utils/sanity/sanityFetch";
import urlFor from "@/utils/sanity/urlFor";

export const revalidate = 10; // revalidate this page every 30 seconds

const About = async () => {
  const query1 = groq`
      *[_type=='pages' && slug.current == 'about-us'][0]{
          ...,
          author->
      }
  `;

  const post: Post = await sanityFetch<Post>({
    query: query1,
  });
  console.log(post.body);

  return (
    <div className="mb-36">
      {/* Title */}
      <h1 className="text-4xl md:text-7xl">About Us</h1>
      <div className="flex flex-row w-full my-8">
        <hr className="w-1/6 h-1 dark:bg-blue-700" />
        <hr className="w-1/2 h-1 dark:bg-red-700" />
      </div>

      {/* Block Quote */}
      <div className="text-lg p-5 italic bg-slate-100 rounded-lg drop-shadow-lg mb-10">
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
      <div className="grid grid-cols-4 mb-10 gap-10">
        {/* Menu */}
        <div className="flex flex-col items-end gap-8 justify-start py-4">
          <a
            href="#"
            className="group block w-full mx-auto p-6 bg-slate-200 shadow-lg space-y-3 ease-out duration-200 rounded-r-lg
            hover:bg-red-400 hover:scale-105
            active:bg-red-600
            focus:bg-red-500 focus:scale-105 focus:translate-x-5
            "
          >
            <div className="flex justify-end space-x-3">
              <h3 className="text-slate-900 group-hover:text-white group-focus:text-white text-lg font-semibold">
                About UTKC
              </h3>
            </div>
          </a>
        </div>

        {/* body */}
        <div className="col-span-3">
          <PortableText value={post.body} components={RichTextComponents} />
        </div>
      </div>
    </div>
  );
};

export default About;
