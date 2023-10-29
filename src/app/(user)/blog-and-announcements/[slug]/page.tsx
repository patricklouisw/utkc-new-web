import groq from "groq";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

import { sanityFetch } from "@/utils/sanity/sanityFetch";
import urlFor from "@/utils/sanity/urlFor";
import { RichTextComponents } from "@/components/RichTextComponents";
import BlogList from "@/components/Blogs/BlogList";

type Props = {
  params: {
    slug: string;
  };
};

const Post = async ({ params: { slug } }: Props) => {
  const query1 = groq`
      *[_type=='post' && slug.current == $slug][0]{
          ...,
          author->,
          categories[]->
      }
  `;

  const query2 = groq`
*[_type=='post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

  const post: Post = await sanityFetch<Post>({
    query: query1,
    params: { slug },
  });
  const posts: Post[] = await sanityFetch<Post[]>({ query: query2 });

  return (
    <article>
      <section className="grid grid-cols-4 grid-flow-col gap-6 mb-14">
        {/* blog */}
        <div className="col-span-4 sm:col-span-3 p-5 drop-shadow-lg">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.author.name}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-80 rounded-t-lg object-cover"
          />

          <div className="bg-[#F5F5F5] p-5 rounded-b-lg border">
            <section className="w-full">
              <div className="flex flex-col justify-between gap-y-5">
                <div>
                  <h1 className="text-4xl font-extrabold">{post.title}</h1>

                  <p>
                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <div className="flex flex-row items-center space-x-2">
                  <Image
                    className="rounded-full"
                    src={urlFor(post.author.image).url()}
                    alt={post.author.name}
                    height={40}
                    width={40}
                  />

                  <div className="w-64 ">
                    <h3 className="text-md font-bold">{post.author.name}</h3>
                    <div>{/* TODO: Author Bio */}</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between gap-5">
                <h2 className="italic pt-2">{post.description}</h2>
                <div className="flex items-center justify-end mt-auto space-x-2">
                  {post.categories.map((category) => (
                    <div
                      key={category._id}
                      className="odd:bg-red-600/70 even:bg-blue-600/70 text-center text-white px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {category.title}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div className="flex flex-row w-full py-5">
              <hr className="w-1/4 h-1 dark:bg-blue-700" />
              <hr className="w-3/4 h-1 dark:bg-red-700" />
            </div>

            {/* <div className="relative w-11/12 h-80 drop-shadow-xl flex justify-center items-center">
            <Image
              className="object-cover object-left lg:object-center"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
            />
          </div> */}

            {/* Body  */}
            <div className="mb-10">
              <PortableText value={post.body} components={RichTextComponents} />
            </div>
          </div>
        </div>

        {/* Widget */}
        <div className="hidden sm:block">widget</div>
      </section>

      {/* Read Next */}
      <div>
        <h3 className="text-4xl">Read Next</h3>
        <div className="flex flex-row w-full mt-3 mb-8">
          <hr className="w-1/6 h-1 dark:bg-blue-700" />
          <hr className="w-1/2 h-1 dark:bg-red-700" />
        </div>
        <BlogList
          posts={posts}
          gridClass="grid-cols-1 md:grid-cols-3"
          cardHeight="h-60"
        />
      </div>
    </article>
  );
};

export default Post;
