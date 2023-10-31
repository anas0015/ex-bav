
import Link from "next/link";
import { buttonVariants } from "./components/ui/button";


export default function Home() {
  return (
    <>
    <h1 className="mb-8 text-6xl">Betriebliche Altersvorsorge</h1>
      <Link className={buttonVariants({size:"lg"})} href="/vertrag">
        <div className="text-2xl">Neuer Antrag</div>
      </Link>
    </>
     )
}
