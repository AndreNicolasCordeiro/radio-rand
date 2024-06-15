import { RadioReceiverIcon } from "lucide-react"
import Link from "next/link"

//gray-900 cor inicial
export default function Footer() {
  return (
    <footer className="p-6 md:py-12 w-full bg-primary">
      <div className="container max-w-7xl flex flex-col items-center justify-between gap-6 sm:flex-row">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <RadioReceiverIcon className="h-8 w-8 text-white" />
          <span className="text-white">RAND</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link href="#sobre" className="text-sm font-medium hover:underline underline-offset-4 text-white" prefetch={false}>
            Sobre
          </Link>
          <Link href="#radio" className="text-sm font-medium hover:underline underline-offset-4 text-white" prefetch={false}>
            Rádio
          </Link>
          <Link href="#apresentadores" className="text-sm font-medium hover:underline underline-offset-4 text-white" prefetch={false}>
            Apresentadores
          </Link>
          <Link href="#depoimentos" className="text-sm font-medium hover:underline underline-offset-4 text-white" prefetch={false}>
            Depoimentos
          </Link>
          <Link href="#contato" className="text-sm font-medium hover:underline underline-offset-4 text-white" prefetch={false}>
            Contato
          </Link>
        </nav>
        <p className="text-xs text-gray-200">&copy; 2024 RAND - Rádio Ativa Neusa Domit. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}