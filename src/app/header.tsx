import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <div className="pt-3 pl-10 pb-1 pr-10 text-4xl rounded-2xl sticky top-0 left-0 themedbg w-screen flex h-20">
      <Link href={`/`}>
        <Image
          alt="NEMUISATSUKI"
          src="/logo.png"
          className="justify-self-start h-full object-contain object-left"
          width={4096}
          height={1255}
        />
      </Link>
      <div className="justify-self-end h-full justify-evenly pt-2 hidden md:flex">
        <Link href={`/works`}>
          <Button>Works</Button>
        </Link>
        <div className="w-10" />
        <Link href="/contact">
          <Button>Contact</Button>
        </Link>
      </div>
    </div>
  );
}
