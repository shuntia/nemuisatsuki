import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { absent_in_the_rain } from "./fonts";
import { Arrow } from "./arrow";

export default function Home() {
  return (
    <>
      <div
        className="pt-3 pl-10 pb-1 pr-10 text-4xl rounded-2xl sticky top-0 left-0 themedbg w-screen flex h-20"
        style={absent_in_the_rain.style}
      >
        <Image alt="NEMUISATSUKI" src="/logo.png" className="justify-self-start h-full object-contain object-left" width={4096} height={1255} />
        <div className="flex justify-evenly justify-self-end items-center">
          <Link href="https://twitter.com/nyaqj">
            <Button>公式Twitterへ移動</Button>
          </Link>
          <div className="w-10" />
          <Link href="https://nyaqj.myportfolio.com">
            <Button>公式ポートフォリオへ移動</Button>
          </Link>
          <div className="w-10" />
          <Link href="https://youtube.com/@nyaqj">
            <Button>公式Youtubeへ移動</Button>
          </Link>
        </div>
      </div>
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
      <main className="pl-8 pr-8">
        <div className="text-xl font-light flex">
          <Card className="p-10 flex-1 mr-5">
            <div className="text-4xl font-light">眠井さつき</div>
            <div className="text-xl mt-2 font-light">
              キミのことを救済するために電子の墓地からやってきた
              <br />
              ばーちゃる墓守Vsinger 眠井さつきです
            </div>
          </Card>
          <Card className="p-10 flex-1 ml-5">
            <Image src="/nemui_satsuki.png" alt="眠井さつき" width={625} height={946} className="mx-auto" />
          </Card>
        </div>
      </main>
      <div className="text-center text-gray-500 pl-[25vw] pr-[25vw] pt-10 font-light">
        All media used on this site are subject to their respective copyrights.
        This site is a fan-made unofficial website and is not affiliated with or
        endorsed by the original creators. You are not permitted to reproduce,
        distribute, or create derivative works based on the content without
        prior permission from the copyright holders.
      </div>
    </>
  );
}
