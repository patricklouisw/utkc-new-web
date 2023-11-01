// @ts-nocheck
import { PortableText } from "@portabletext/react";
import groq from "groq";

import { RichTextComponents } from "@/components/RichTextComponents";
import { sanityFetch } from "@/utils/sanity/sanityFetch";
import urlFor from "@/utils/sanity/urlFor";
// import { useState } from "react";

export const revalidate = 10; // revalidate this page every 30 seconds

const getAllAboutTitles = async () => {
  const query1 = groq`
  *[_type=='pages' && 'About' in pageCategory[]->title]{
      _id,
      title,
      slug
  }
  `;

  const getAllAboutTitles = await sanityFetch({
    query: query1,
  });

  return getAllAboutTitles;
};

const getBody = async (slugName: string) => {
  const query1 = groq`
  *[_type=='pages' && 'About' in pageCategory[]->title && slug.current == 'about-us'][0]{
    body
  }
  `;

  const body = await sanityFetch({
    query: query1,
  });

  return body;
};

const About = async () => {
  // const query1 = groq`
  // *[_type=='pages' && 'About' in pageCategory[]->title]{
  //     ...,
  //     author->,
  //     pageCategory[]->,
  // }
  // `;

  // const aboutPages: Post[] = await sanityFetch<Post[]>({
  //   query: query1,
  // });
  // console.log(aboutPages[0].body);
  // const { slug, setSlug } = useState("about-us");

  const allAboutTitles = await getAllAboutTitles();
  const body = await getBody("about-us");

  return (
    <div>
      <h1 className="text-4xl">TESTING</h1>
      {/* <div className="grid grid-cols-4 mb-10 gap-10">
        <div className="flex flex-col items-end gap-8 justify-start py-4">
          {allAboutTitles.map((aboutTitle) => (
            <a
              key={aboutTitle._id}
              href="#"
              className="group block w-full mx-auto p-6 bg-slate-200 shadow-lg space-y-3 ease-out duration-200 rounded-r-lg
              hover:bg-red-400 hover:scale-105
              active:bg-red-600
              focus:bg-red-500 focus:scale-105 focus:translate-x-5
              "
              // onClick={() => {
              //   setSlug(aboutTitle.slug.current);
              // }}
            >
              <div className="flex justify-end space-x-3">
                <h3 className="text-slate-900 group-hover:text-white group-focus:text-white text-lg font-semibold">
                  {aboutTitle.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="col-span-3">
          <PortableText value={body} components={RichTextComponents} />
        </div>
      </div> */}
    </div>
  );
};

export default About;
