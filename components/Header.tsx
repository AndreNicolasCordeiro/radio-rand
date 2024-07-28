import { MenuIcon, MountainIcon, RadioReceiverIcon, XIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"


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

        <div className="block md:hidden">
        <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
        <div className="flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Image
            src="/favicon-32x32.png"
            alt="RAND"
            width={32}
            height={32}
            />
            <span className="sr-only">RAND</span>
          </Link>
        </div>
        <nav className="mt-8 grid gap-4">
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
      </SheetContent>
    </Sheet>
    </div>
        </div>
      </header>
        </>
    )
}

export default Header;