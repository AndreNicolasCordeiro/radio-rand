import { unstable_noStore } from "next/cache";

import Link from "next/link";
import Image from "next/image";
import { MovingBorderDemo } from "./ui/moving-border-beta";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Mail, Youtube } from "lucide-react";
import client from "@/lib/contentful";

import { EntrySkeletonType } from "contentful";

type SobreRadioSkeleton = EntrySkeletonType & {
  fields: {
    titulo: string;
    descricao: string;
  };
};

type Apresentador = {
  fields: {
    nome: string;
    descricao: string;
    imagem?: string;
  };
};

type ApresentadoresSkeleton = EntrySkeletonType & {
  fields: {
    titulo: string;
    descricao: string;
    apresentadores: Apresentador[];
  };
};

type Testemonial = {
  fields: {
    nome: string;
    cargo: string;
    opiniao: string;
    imagem?: string;
  };
};

type OpiniaoSkeleton = EntrySkeletonType & {
  fields: {
    titulo: string;
    descricao: string;
    opinioes: Testemonial[];
  };
};

export default async function Component() {
  unstable_noStore();
  const entries = await client.getEntries();

  const apresentadoresEntries = await client.getEntries<ApresentadoresSkeleton>(
    {
      content_type: "apresentadores",
    }
  );

  const sessaoOpiniaoResponse = await client.getEntries<OpiniaoSkeleton>({
    content_type: "sessaoOpiniao",
  });

  const sessaoOpiniao = sessaoOpiniaoResponse.items[0];

  const sobre = entries.items.find(
    (item) => item.sys.contentType.sys.id === "sobre"
  );

  const sobreRadioEntries = await client.getEntries<SobreRadioSkeleton>({
    content_type: "sobreRadio",
  });

  const sobreRadio = sobreRadioEntries.items[0];

  const apresentadores: Apresentador[] =
    apresentadoresEntries.items[0]?.fields.apresentadores || [];

  const opinioes: Testemonial[] = sessaoOpiniao?.fields.opinioes || [];
  const tituloOpiniao = sessaoOpiniao?.fields.titulo || "";
  const descricaoOpiniao = sessaoOpiniao?.fields.descricao || "";

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="bg-[#487175] text-white py-20 md:py-32 px-6 md:px-8 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Sintonize na Rádio Escolar
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl text-center">
            Descubra as últimas notícias, músicas e muito mais da nossa vibrante
            comunidade escolar.
          </p>
          <Link href="/radio">
            <MovingBorderDemo />
          </Link>
        </section>
        <section
          id="about"
          className="container py-16 md:py-24 px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="flex flex-col justify-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-primary"
              id="sobre"
            >
              {sobre?.fields.titulo as string}
            </h2>
            <p className="text-gray-700 dark:text-gray-400 mb-8">
              {sobre?.fields.descricao as string}
            </p>
          </div>
          <Image
            src="/neusadomit.jpg"
            alt="Fachada Colégio Neusa Domit"
            className="w-full h-full rounded-lg object-cover"
            width={0}
            height={0}
            sizes="100vw"
          />
        </section>
        <section
          id="radio"
          className="bg-gray-100 dark:bg-gray-800 py-16 md:py-24 px-6 md:px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto py-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-primary">
                  {sobreRadio?.fields.titulo as string}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 max-w-md">
                  {sobreRadio?.fields.descricao as string}
                </p>
              </div>
            </div>
            <div className="relative">
              <Carousel className="rounded-lg overflow-hidden">
                <CarouselContent>
                  <CarouselItem>
                    <Image
                      src="/imagem01.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt="Product 1"
                      className="w-full h-full rounded-md object-cover aspect-[4/3]"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/imagem02.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt="Product 1"
                      className="w-full h-full rounded-md object-cover aspect-[4/3]"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/imagem03.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt="Product 1"
                      className="w-full h-full rounded-md object-cover aspect-[4/3]"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/imagem04.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt="Product 1"
                      className="w-full h-full rounded-md object-cover aspect-[4/3]"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/imagem05.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt="Product 1"
                      className="w-full h-full rounded-md object-cover aspect-[4/3]"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/imagem06.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt="Product 1"
                      className="w-full h-full rounded-md object-cover aspect-[4/3]"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/imagem07.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt="Product 1"
                      className="w-full h-full rounded-md object-cover aspect-[4/3]"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 text-gray-900 dark:text-gray-50 hover:text-gray-950 dark:hover:text-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-300">
                  <ChevronLeftIcon className="w-6 h-6" />
                </CarouselPrevious>
                <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 text-gray-900 dark:text-gray-50 hover:text-gray-950 dark:hover:text-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-300">
                  <ChevronRightIcon className="w-6 h-6" />
                </CarouselNext>
              </Carousel>
            </div>
          </div>

          <div className="container flex flex-col lg:flex-row gap-4">
            <Card>
              <CardContent className="p-4 flex flex-col gap-4">
                <Image
                  src="/imagem01.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="Product 1"
                  className="w-full h-full rounded-md object-cover aspect-[4/3]"
                />
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-primary">
                    Notícias & Atualizações
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Mantenha-se atualizado com as últimas notícias e eventos
                    acontecendo em nossa comunidade escolar.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex flex-col gap-4">
                <Image
                  src="/imagem02.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="Product 1"
                  className="w-full h-full rounded-md object-cover aspect-[4/3]"
                />
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-primary">
                    Música & Entreterimento
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Descubra novas músicas, ouça playlists selecionadas pelos
                    alunos e desfrute de uma variedade de programas divertidos.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex flex-col gap-4">
                <Image
                  src="/imagem03.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="Product 1"
                  className="w-full h-full rounded-md object-cover aspect-[4/3]"
                />
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-primary">
                    Esportes & Atividades
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Receba as últimas atualizações sobre as equipes esportivas e
                    atividades extracurriculares de nossa escola.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section id="presenters" className="py-16 md:py-24 px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              {apresentadoresEntries.items[0].fields.titulo}
            </h2>
            <p
              className="text-gray-700 dark:text-gray-400 mb-8"
              id="apresentadores"
            >
              {apresentadoresEntries.items[0].fields.descricao}
            </p>
            <div className="grid grid-cols-1 gap-6">
              {apresentadores.length > 0 ? (
                apresentadores.map((apresentador: any, index: any) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 rounded-lg p-6 text-left"
                  >
                    <div className="flex flex-row gap-2 items-center">
                      <Image
                        src={
                          apresentador.fields.imagem
                            ? `${apresentador.fields.imagem}`
                            : "/neusadomit.jpg"
                        }
                        alt="Foto do Apresentador"
                        className="rounded-full w-12 h-12 mr-4"
                        width={48}
                        height={48}
                      />
                      <h3 className="text-xl font-bold mb-2 text-primary">
                        {apresentador.fields.nome}
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-400 mt-2">
                      {apresentador.fields.descricao}
                    </p>
                  </div>
                ))
              ) : (
                <p>Nenhum apresentador encontrado.</p>
              )}
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="bg-gray-100 dark:bg-gray-800 py-16 md:py-24 px-6 md:px-8"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-primary"
              id="depoimentos"
            >
              {tituloOpiniao}
            </h2>
            <p className="text-gray-700 dark:text-gray-400 mb-8">
              {descricaoOpiniao}
            </p>
            <div className="grid grid-cols-1 gap-6">
              {opinioes.map((opiniao: any, index: any) => (
                <div
                  className="bg-white dark:bg-gray-700 rounded-lg p-6 text-left"
                  key={index}
                >
                  <blockquote className="mb-4">
                    <p className="text-gray-700 dark:text-gray-400 italic">
                      {opiniao.fields.opiniao}
                    </p>
                  </blockquote>
                  <div className="flex items-center">
                    <Image
                      src={
                        opiniao.fields.imagem
                          ? `${opiniao.fields.imagem}`
                          : "/neusadomit.jpg"
                      }
                      alt="Foto do depoente"
                      className="rounded-full w-12 h-12 mr-4"
                      width={48}
                      height={48}
                    />
                    <div>
                      <h4 className="text-lg font-bold text-primary">
                        {opiniao.fields.nome}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-400">
                        {opiniao.fields.cargo}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <div id="contact" className="bg-primary text-white py-8 px-6 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Entre em contato</h3>
            <p className="text-gray-400 mb-2" id="contato">
              Rádio Ativa Neusa Domit
              <br />
              R. Wilson Alves, 680
              <br />
              São Braz, União da Vitória - PR
            </p>
            <p className="text-gray-400 mb-2">
              WhatsApp: (42) 3524-3855
              <br />
              Email: radioneusadomit@gmail.com
            </p>
            <div className="flex gap-4 my-4">
              <Link
                href="https://www.facebook.com/people/RAND-R%C3%A1dio-Ativa-Neusa-Domit/100090611147866/?mibextid=ZbWKwL"
                className="text-gray-400 hover:text-white"
                prefetch={false}
              >
                <FacebookIcon className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.instagram.com/radioativaneusadomit/"
                className="text-gray-400 hover:text-white"
                prefetch={false}
              >
                <InstagramIcon className="h-6 w-6" />
              </Link>
              <Link
                href="https://youtube.com/@RadioAtivaNeusaDomit?si=ORd_j8oegwggkNdG"
                className="text-gray-400 hover:text-white"
                prefetch={false}
              >
                <Youtube className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:radioneusadomit@gmail.com"
                className="text-gray-400 hover:text-white"
                prefetch={false}
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
            <a href="http://play.radios.com.br/213965" target="_blank">
              {" "}
              <Image
                src="https://img.radios.com.br/divulgue/app-radiosnet-234x60-a.jpg"
                alt="Ouça nossa rádio em seu celular ou tablet com Android ou no iPhone e iPads"
                width="234"
                height="60"
              />{" "}
            </a>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Localização</h3>
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14315.506601546824!2d-51.0548263!3d-26.2331972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e68a7fd0a79a3d%3A0xac154dd367ebc1d9!2sNeusa%20Domit%2C%20C%20E-Ef%20M!5e0!3m2!1spt-BR!2sbr!4v1718160489314!5m2!1spt-BR!2sbr"
                className="w-full h-full rounded-lg"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">
              Acesse a rádio Ativa RAND
            </h3>
            <p className="text-gray-400 mb-4">
              Fique ligado diariamente em nossa programação!
            </p>
            <div className="flex gap-2 justify-center md:justify-start">
              <Link href="/radio">
                <MovingBorderDemo />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function ChevronLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

//
