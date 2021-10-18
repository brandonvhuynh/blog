/**
 * Fetch Blog Post Comments
 */

 const fetchBlogPostComments = async (id) => {
  try {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;

    const response = await fetch(url)
    const data = await response.json();

    return data
  } catch (error) {
    console.error(error);
  }
}

export default fetchBlogPostComments