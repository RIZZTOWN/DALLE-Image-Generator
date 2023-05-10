import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md">
      <div className="flex space-x-2 items-center">
        <Image
          src="https://a-us.storyblok.com/f/1001320/2400x1260/f6816e068d/2301-ai-designer-blog-2x.jpg"
          alt="logo"
          height={30}
          width={30}
        />

        <div>
          <h1 className="font-bold">
            The Wonderful <span className="text-violet-500">AI</span> Image
            Generator
          </h1>
          <h2 className="text-xs">Powered by DALLE-E 2 & Chat GPT!</h2>
        </div>
      </div>
      <div className="flex text-xs md:text-base divide-x items-center text-gray-500">
        <Link
          href="https://github.com/RIZZTOWN"
          className="px-2 font-light text-right"
        >
          Connect with me
        </Link>
        <Link
          href="https://www.linkedin.com/in/ryanwheelers/"
          className="px-2 font-light"
        >
          Check out my work
        </Link>
      </div>
    </header>
  );
}

export default Header;
