import Image from "next/image";
import { Header } from "../header";
import { Card } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
      <div className="w-full text-center h-10 text-4xl font-light">
        Nemui Satsuki's Works
      </div>
      <main className="md:p-50 pt-10">
        <Card className="md:pl-20 md:pr-20 font-light">
          <Label className="text-3xl font-light">VSinger</Label>
          <div className="text-lg p-5">
            <Button className="w-1/2 themedbg p-5 content-between block gap-4 h-auto font-light text-left">
              <Link href="https://www.youtube.com/watch?v=lC6k9SJ6R4o" className="no-underline cursor-default">
                <div className="relative w-full aspect-video">
                  <Image
                    className="rounded-2xl object-contain"
                    src="/works/nightmare.webp"
                    alt="nightmare"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <Label className="text-2xl font-light pt-5">ナイトメア</Label>
                <div className="p-5 font-light">
                  first single「ナイトメア」<br />
                  <br />
                  夢を叶えさせてくれてありがとう<br />
                  キミを夢の中でずっと待ってるからね<br />
                </div>
                <div className="text-sm font-light text-gray-500">
                  vocal 眠井さつき <Link href="https://twitter.com/nyaqj">@nyaqj</Link><br />
                  music gaburyu <Link href="https://twitter.com/gabustep">@gabustep</Link><br />
                  illustration 組長 <Link href="https://twitter.com/kwiozsn">@kwiozsn</Link><br />
                  movie ぱるふ <Link href="https://twitter.com/PALF_MovieWorks">@PALF_MovieWorks</Link><br />
                </div>
              </Link>
            </Button>
          </div>
        </Card>
        <div className="h-20" />
        <Card className="md:pl-20 md:pr-20 font-light">
          <Label className="text-3xl font-light">Illustrator</Label>
          <div className="text-lg p-5">
            My drawings, works, and more!
          </div>
        </Card>
        <div className="h-20" />
        <Card className="md:pl-20 md:pr-20 font-light">
          <Label className="text-3xl font-light">VTuber</Label>
          <div className="text-lg p-5">
            My channel, works, and more!
          </div>
        </Card>
        <div className="h-20" />
      </main>
    </>
  );
}
