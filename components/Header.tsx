import { RadioReceiverIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import { MovingBorderDemo } from "./ui/moving-border-beta"

const Header = () => {
    return (
        <>
        <header className="bg-[#487175] text-white py-4 px-6 md:px-8 flex items-center justify-between">
          <div className="container flex justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <RadioReceiverIcon className="h-8 w-8" />
          <span className="text-xl font-bold">RAND</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#sobre" className="hover:underline" prefetch={false}>
            Sobre
          </Link>
          <Link href="#radio" className="hover:underline" prefetch={false}>
            Rádio
          </Link>
          <Link href="#apresentadores" className="hover:underline" prefetch={false}>
            Apresentadores
          </Link>
          <Link href="#depoimentos" className="hover:underline" prefetch={false}>
            Depoimentos
          </Link>
          <Link href="#contato" className="hover:underline" prefetch={false}>
            Contato
          </Link>

        </nav>
        <Button className="md:hidden">Menu</Button>
        </div>
      </header>
        </>
    )
}

export default Header;