import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <>
    <div className="p-4">
      <Image src="/banner.jpg" alt="Banner Image" width={1707} height={282} className="w-screen rounded-2xl" />
    </div>
    <main className="pl-8 pr-8">
      <Card>
        <Label className="text-center text-4xl font-light">眠井さつきの非公式ウェブサイトへようこそ！</Label>
        <div className="pl-40 pr-40 mt-4 mb-4 flex justify-evenly">
          <Link href="https://twitter.com/nyaqj"><Button>公式Twitterへ移動</Button></Link>
          <Link href="https://nyaqj.myportfolio.com"><Button>公式ポートフォリオへ移動</Button></Link>
        </div>
      </Card>
    </main>
  </>;
}
