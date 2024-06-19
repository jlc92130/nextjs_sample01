import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const resp = await fetch(
    "https://jl-next-projet-default-rtdb.europe-west1.firebasedatabase.app/articles.json"
  );

  const articles = await resp.json();
  let posts = [];
  for (const key in articles) {
    posts.push({
      id: key,
    });
  }
  return posts; // return a tab of id that will be the params
}

export async function generateMetadata({ params: { id } }) {
  const resp = await fetch("http://localhost:3000/api/articles", {
    method: "POST",
    body: JSON.stringify({ id }),
  });

  const data = await resp.json();

  if (!data) {
    notFound();
  }
  const article = data;
  return {
    title: article.title,
    content: article.content,
  };
}

export default async function Article({ params: { id } }) {
  const resp = await fetch("http://localhost:3000/api/articles", {
    method: "POST", // on envoi l id a notre api
    body: JSON.stringify({ id }),
  });

  const data = await resp.json();
  if (!data) {
    notFound();
  }
  const article = data;
  console.log(article);
  return (
    <div>
      <h1 className="text-center text-4xl font-semibold"> {article.title}</h1>
    </div>
  );
}
