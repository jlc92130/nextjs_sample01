"use server";
import { revalidatePath } from "next/cache";

export const create = async (title, content) => {
  //throw new Error("eeeee");
  const resp = await fetch(
    "https://jl-next-projet-default-rtdb.europe-west1.firebasedatabase.app/articles.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    }
  );
  const data = await resp.json();

  if (!resp.ok) {
    throw new Error("une erreur est sur");
  }
  revalidatePath("/"); // permet d'afficher le nouvel element ajouter en base de donnée sans recharger manuellement la page
};
