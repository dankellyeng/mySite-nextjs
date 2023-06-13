import * as contentful from "contentful";

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'oizsdm19j7ut',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: 'AIJUd6qrOEHJc_5Wu6qqra-vaQhOYkJxKia8RU3fWcQ',
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token
export async function fetchEntries() {
    const res = await fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}`
    );

    console.log(res.json());
  
    return res.json()
  }
export default { fetchEntries };

