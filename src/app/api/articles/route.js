import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json(); // on recoit la requete de /blog/id/page.jsx
  const id = data.id; // on recupere l id

  try {
    const resp = await fetch(
      `https://jl-next-projet-default-rtdb.europe-west1.firebasedatabase.app/articles/${id}.json`
    );

    const data = await resp.json();

    if (!resp.ok) {
      throw new Error("cet article n'existe pas");
    }

    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    throw new Error(e.message);
  }
}
