import Image from "next/image";
import { Header } from "../header";
import { Card } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";

export default function Page() {
  return (
    <>
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
      <div className="h-20" />
      <div className="w-full text-center h-10 text-4xl font-thin">
        Nemui Satsuki's Works
      </div>
      <main className="md:p-50 pt-10">
        <Card className="md:pl-20 md:pr-20 font-thin">
          <Label className="text-3xl font-thin">Illustrator</Label>
          <div className="text-lg p-5">
            My drawings, works, and more!
          </div>
        </Card>
        <div className="h-20" />
        <Card className="md:pl-20 md:pr-20 font-thin">
          <Label className="text-3xl font-thin">VTuber</Label>
          <div className="text-lg p-5">
            My channel, works, and more!
          </div>
        </Card>
        <div className="h-20" />
        <Card className="md:pl-20 md:pr-20 font-thin">
          <Label className="text-3xl font-thin">VSinger</Label>
          <div className="text-lg p-5">
            My songs, works, and more!
          </div>
        </Card>
      </main>
    </>
  );
}
