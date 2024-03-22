import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-24">
      <h1
        className=" 
      text-4xl font-bold text-center text-muted-foreground
      "
      >
        Creatify AI <br /> (UNPROTECTED)
      </h1>
      <p>Your AI-powered creative assistant for all your creative needs</p>
      <p>This will be the landing page</p>
      <div className="flex gap-5">
        <Link href={"/sign-in"}>
          <Button>Sign in</Button>
        </Link>
        <Link href={"sign-up"}>
          <Button>Sign up</Button>
        </Link>
      </div>
    </main>
  );
}
