import Link from "next/link";

export default async function Posts() {
  const aleatoire = Math.floor(Math.random() * 10) + 1;

  const resp = await fetch(
    //`https://dummyjson.com/posts?limit=${aleatoire}`
    `https://jl-next-projet-default-rtdb.europe-west1.firebasedatabase.app/articles.json`,
    {
      next: {
        revalidate: 5,
      },
    }
  );

  const data = await resp.json();

  let posts = [];

  for (const key in data) {
    posts.push({
      id: key,
      title: data[key].title,
      content: data[key].content,
    });
  }

  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`blog/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </>
  );
}
