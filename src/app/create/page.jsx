"use client";
import { useRef, useState } from "react";
import { create } from "@/actions/create-article";
import { toast } from "react-toastify";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";

export default function Create() {
  const title = useRef("");
  const content = useRef("");
  const form = useRef("");
  const router = useRouter();
  //const [dis, SetDisable] = useState(true);

  const prepareOnNewArticle = async () => {
    //e.preventDefault(); gerer par Nextjs grace a action

    try {
      // SetDisable(false);
      await create(title.current.value, content.current.value);
    } catch (e) {
      toast.error(e.message);
    }
    form.current.reset();
    toast.success("Article crée");

    router.push("/");
  };

  return (
    <div>
      <h1 className="text-4xl font-semibold text-center">post</h1>
      <div className="w-[500px] mx-auto bg-gray-100 border rounded p-5 mt-4">
        <form ref={form} action={prepareOnNewArticle}>
          <div>
            <input
              type="text"
              placeholder="titre"
              className="px-4 py-2 w-full"
              ref={title}
            />
          </div>
          <div>
            <textarea
              placeholder="contenu"
              className="px-4 py-2 mt-2 w-full"
              ref={content}
            ></textarea>
          </div>
          <div className="flex justify-end">
            {/*   <Button   dis={!dis}   toto={(e) => prepareOnNewArticle(e)}></div>   */}
            <Button>Creer</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
