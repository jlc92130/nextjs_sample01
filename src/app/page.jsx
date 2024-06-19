import Posts from "@/components/Posts/Posts";
import { Suspense } from "react";

export default function Index() {
  return (
    <div>
      <a href="[../blog/article]">Page accueil</a>
      <Suspense fallback={<p>chargement...</p>}>
        <Posts />
      </Suspense>
    </div>
  );
}
