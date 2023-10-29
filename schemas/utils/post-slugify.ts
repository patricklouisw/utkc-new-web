const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

async function postSlugSlugifier(input: string, schemaType: any, context: any) {
    // New Slug
    const d = new Date();
    const slug = input
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^0-9a-zA-Z-]/g, '')
        .slice(0, 96) +"-"+ d.getTime()

    // get Context
    const {getClient} = context
    const client = getClient({apiVersion})

    const query = 'count(*[_type=="post" && slug.current == $slug]{_id})'
    const params = {slug: slug}

    return client.fetch(query, params).then((count: number) => {
      console.log('Num of Identical slug', count)
      return `${slug}`
    })
    return slug
  }


export default postSlugSlugifier;