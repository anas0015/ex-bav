
import Link from "next/link";
import { Button } from "./components/ui/button";


export default function Home() {
  return (

    <div className="flex flex-col justify-center">
      <h1 className="mt-8 mb-8 text-6xl">Betriebliche Altersvorsorge</h1>
      <div className="flex justify-center">

        <Button asChild>
          <Link href="/vertrag">      
            Neuer Vertrag
          </Link>
        </Button>
      </div>
    </div>

  )
}
