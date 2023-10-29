import urlFor from "@/utils/sanity/urlFor";
import Image from "next/image";
import Link from "next/link";

type Props = {
  posts: Post[];
  gridClass?: string;
  cardHeight?: string;
};

const BlogList = ({ posts, gridClass, cardHeight }: Props) => {
  // console.log(posts);

  if (!gridClass) {
    gridClass = `grid-cols-1 md:grid-cols-2`;
  }

  if (!cardHeight) {
    cardHeight = `h-80`;
  }

  return (
    <div className={`grid px-10 gap-y-16 pb-24 gap-10 ${gridClass}`}>
      {posts.map((post) => (
        <Link
          href={`/blog-and-announcements/${post.slug.current}`}
          key={post._id}
        >
          <div className="flex flex-col group cursor-pointer">
            <div
              className={`relative w-full drop-shadow-xl group-hover:scale-105
      transition-transform duration-200 ease-out ${cardHeight}`}
            >
              <Image
                className="object-cover object-left lg:object-center"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
              />

              <div
                className="absolute bottom-0
            w-full bg-opacity-40
          bg-black rounded drop-shadow-lg
          text-white p-5 flex justify-between"
              >
                <div>
                  <p className="font-bold">{post.title}</p>
                  <p>
                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-end md:items-center md:justify-end flex-wrap">
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
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
