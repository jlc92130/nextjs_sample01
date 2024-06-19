import Image from "next/image";

export default function Header() {
  return (
    <header className="p-2 bg-gray-200 flex justify-center ">
      <Image
        src="https://t3.ftcdn.net/jpg/02/94/22/52/360_F_294225253_YiGjFQNJfEHvd8jpGAZJJSNGSfBnZxMy.jpg"
        width={50}
        height={50}
        quality={75}
      />
    </header>
  );
}
