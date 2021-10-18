/**
 * Fetch Blog Post
 */

 const fetchBlogPost = async (id) => {
  try {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

    const response = await fetch(url)
    const data = await response.json();

    return data
  } catch (error) {
    console.error(error);
  }
}

export default fetchBlogPost