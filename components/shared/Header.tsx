import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex justify-between items-center">
        <Link href="/" className="w-32">
          <Image
            loading="lazy"
            src="./assets/images/logo.svg"
            width={128}
            height={30}
            alt="Nav Logo"
          />
        </Link>
        <div className="flex w-32 justify-end gap-3">
          <button>Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
