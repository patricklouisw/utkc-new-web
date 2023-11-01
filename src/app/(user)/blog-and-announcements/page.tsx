import { groq } from "next-sanity";

import { sanityFetch } from "@/utils/sanity/sanityFetch";
import BlogList from "@/components/Blogs/BlogList";

const query = groq`
*[_type=='post']{
  ...,
  author->,
  postCategory[]->
} | order(_createdAt desc)
`;

const BlogsAnnouncements = async () => {
  const posts = await sanityFetch<Post[]>({ query });

  return (
    <div>
      <h1 className="text-4xl md:text-7xl">Blogs & Announcements</h1>
      <div className="flex flex-row w-full my-8">
        <hr className="w-1/6 h-1 dark:bg-blue-700" />
        <hr className="w-1/2 h-1 dark:bg-red-700" />
      </div>

      <BlogList posts={posts} />
    </div>
  );
};

export default BlogsAnnouncements;
