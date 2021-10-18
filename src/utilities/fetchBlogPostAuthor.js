/**
 * Fetch Blog Post Author
 */

 const fetchBlogPostAuthor = async (id) => {
  try {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;

    const response = await fetch(url)
    const data = await response.json();

    return data
  } catch (error) {
    console.error(error);
  }
}

export default fetchBlogPostAuthor