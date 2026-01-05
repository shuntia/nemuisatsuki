import { Button } from "@/components/ui/button";
import { Header } from "../header";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return <>
    <Header />
    <div className="p-4">
      <Image
        src="/banner.jpg"
        alt="Banner Image"
        width={1707}
        height={282}
        className="w-screen rounded-2xl"
      />
    </div>
    <main className="p-10 w-screen pt-20">
      <div className="flex justify-center">
        <Link href="https://twitter.com/nyaqj"><Button className="p-7 text-center font-light text-4xl">Contact me!</Button></Link>
      </div>
      <div className="flex justify-center pt-20">
        <Link href="https://twitter.com/shuntia_nya" className="text-gray-400">Contact website creator(shuntia)</Link>
      </div>
    </main>
  </>
}
