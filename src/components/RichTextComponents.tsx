import Image from "next/image";
import Link from "next/link";
import urlFor from "../utils/sanity/urlFor";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            fill
          />
        </div>
      );
    },
  },

  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-3 list-disc space-y-3">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-10 py-3 mt-lg list-decimal space-y-3">{children}</ol>
    ),

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }: any) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },

  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-5 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-5 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-5 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-5 font-bold">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-red-600 border-l-4 pl-5 py-2 mb-5 text-xl">
        {children}
      </blockquote>
    ),
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          target="_blank"
          className="underline text-blue-600 decoration-blue-600 hover:decoration-red-600 hover:text-red-600"
        >
          {children}
        </Link>
      );
    },
  },
};
