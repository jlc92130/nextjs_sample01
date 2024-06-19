import { useFormStatus } from "react-dom";

export default function Button({ children, toto /* dis */ }) {
  const { pending } = useFormStatus(); // desactive le bouton le temps d'envoyer la requete (true or false). Passe à true des que l'on presse le bouton
  return (
    <button
      /* disabled={dis} */
      disabled={pending}
      onClick={toto}
      className="px-4 py-3 disabled:cursor-not-allowed disabled:bg-opacity-35 bg-blue-500 text-white rounded mt-4"
    >
      {children}
    </button>
  );
}
