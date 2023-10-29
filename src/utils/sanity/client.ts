import {createClient} from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

// let isLocalhost = true;
// if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"){
//     isLocalhost = false;
// }

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: false,
});