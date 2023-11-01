import { groq } from "next-sanity";
import { RichTextComponents } from "@/components/RichTextComponents";
import { PortableText } from "@portabletext/react";
import { sanityFetch } from "@/utils/sanity/sanityFetch";

type Props = {
  params: {
    slug: string;
  };
};

const getBody = async (slugName: string) => {
  const query = groq`
    *[_type=='pages' && 'About' in pageCategory[]->title && slug.current == '${slugName}'][0]{
        body
    }
    `;

  try {
    const body = await sanityFetch({
      query: query,
    });

    return body;
  } catch (e: any) {
    console.log(e);
    throw e;
  }
};

const page = async ({ params }: { params: { slug: string } }) => {
  const body: any = await getBody(params.slug);

  return (
    <>
      <PortableText value={body.body} components={RichTextComponents} />
    </>
  );
};

export default page;
