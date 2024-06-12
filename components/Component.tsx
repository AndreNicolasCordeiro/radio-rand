import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="bg-gray-900 text-white py-20 md:py-32 px-6 md:px-8 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Sintonize na Rádio Escolar
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl text-center">
            Descubra as últimas notícias, músicas e muito mais da nossa vibrante
            comunidade escolar.
          </p>
          <Link href="/radio">
            <Button className="color-primary text-slate-950 font-bold bg-white hover:bg-white">
              Conectar com a rádio
            </Button>
          </Link>
        </section>
        <section
          id="about"
          className="container py-16 md:py-24 px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" id="sobre">
              Sobre o colégio
            </h2>
            <p className="text-gray-700 dark:text-gray-400 mb-8">
              O Colégio Estadual Neusa Domit, uma instituição de destaque no
              Distrito de São Cristóvão, localizado no Bairro São Braz, em União
              da Vitória, estado do Paraná, estabeleceu-se na Rua Wilson Alves,
              680. Fundado na década de 1990, o colégio é reconhecido como uma
              instituição estadual de ensino renomada. Oferecendo uma ampla gama
              de programas educacionais, o colégio atende tanto à educação
              fundamental, cobrindo os anos do 6º ao 9º ano, quanto ao ensino
              médio/técnico, abrangendo os anos do 1º ao 3º ano.
            </p>
          </div>
          <img
            src="/neusadomit.jpg"
            alt="School Campus"
            className="rounded-lg object-cover"
          />
        </section>
        <section
          id="radio"
          className="bg-gray-100 dark:bg-gray-800 py-16 md:py-24 px-6 md:px-8"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Muito mais do que uma rádio
            </h2>
            <p className="text-gray-700 dark:text-gray-400 mb-8" id="radio">
              A Rádio Ativa Neusa Domit é uma Web Rádio eclética, oferecendo uma
              diversificada programação musical e cultural voltada para o
              segmento estudantil. Nosso objetivo é difundir e estimular a
              participação dos alunos, tanto de forma direta quanto indireta,
              por meio de programas variados em nossa grade, incluindo
              transmissões ao vivo e gravações no formato de podcast. Junte-se a
              nós para desfrutar de uma experiência radiofônica envolvente e
              promover a expressão criativa dos estudantes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-left">
                <h3 className="text-xl font-bold mb-2">
                  Notícias &amp; Atualizações
                </h3>
                <p className="text-gray-700 dark:text-gray-400">
                  Mantenha-se atualizado com as últimas notícias e eventos
                  acontecendo em nossa comunidade escolar.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-left">
                <h3 className="text-xl font-bold mb-2">
                  Música &amp; Entreterimento
                </h3>
                <p className="text-gray-700 dark:text-gray-400">
                  Descubra novas músicas, ouça playlists selecionadas pelos
                  alunos e desfrute de uma variedade de programas divertidos.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-left">
                <h3 className="text-xl font-bold mb-2">
                  Esportes &amp; Atividades
                </h3>
                <p className="text-gray-700 dark:text-gray-400">
                  Receba as últimas atualizações sobre as equipes esportivas e
                  atividades extracurriculares de nossa escola.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="presenters" className="py-16 md:py-24 px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Conheça Nossos Apresentadores
            </h2>
            <p className="text-gray-700 dark:text-gray-400 mb-8" id="apresentadores">
              Nossa talentosa equipe de apresentadores traz suas personalidades
              únicas e expertise para as ondas do rádio, garantindo uma
              experiência auditiva envolvente e informativa.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-left">
                <img
                  src="/neusadomit.jpg"
                  alt="Presenter 1"
                  className="rounded-full w-24 h-24 mb-4"
                />
                <h3 className="text-xl font-bold mb-2">John Doe</h3>
                <p className="text-gray-700 dark:text-gray-400">
                  Apresentador do Programa Matinal
                </p>
                <p className="text-gray-700 dark:text-gray-400 mt-2">
                  John é um entusiasta apaixonado por rádio, com uma vasta
                  experiência na indústria. Ele traz uma personalidade animada e
                  envolvente para as ondas do rádio.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-left">
                <img
                  src="/neusadomit.jpg"
                  alt="Presenter 2"
                  className="rounded-full w-24 h-24 mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
                <p className="text-gray-700 dark:text-gray-400">
                  Apresentador da Playlist da Tarde
                </p>
                <p className="text-gray-700 dark:text-gray-400 mt-2">
                  Jane é uma entusiasta da música que cria uma mistura eclética
                  de canções para manter os ouvintes entretidos ao longo do dia.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-left">
                <img
                  src="/neusadomit.jpg"
                  alt="Presenter 3"
                  className="rounded-full w-24 h-24 mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Michael Johnson</h3>
                <p className="text-gray-700 dark:text-gray-400">
                  Apresentador do Resumo Esportivo
                </p>
                <p className="text-gray-700 dark:text-gray-400 mt-2">
                  Michael é um fanático por esportes que mantém os ouvintes
                  atualizados com as últimas notícias e destaques dos programas
                  esportivos de nossa escola.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="bg-gray-100 dark:bg-gray-800 py-16 md:py-24 px-6 md:px-8"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" id="depoimentos">
              Opinião dos Nossos Ouvintes
            </h2>
            <p className="text-gray-700 dark:text-gray-400 mb-8">
              Escute o que nossos ouvintes satisfeitos têm a dizer sobre sua
              experiência com nossa estação de rádio escolar.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-left">
                <blockquote className="mb-4">
                  <p className="text-gray-700 dark:text-gray-400 italic">
                    "Adoro sintonizar na rádio da escola! Os apresentadores são
                    tão envolventes, e sempre descubro novas músicas que não
                    encontraria de outra forma."
                  </p>
                </blockquote>
                <div className="flex items-center">
                  <img
                    src="/neusadomit.jpg"
                    alt="Testimonial 1"
                    className="rounded-full w-12 h-12 mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-bold">Sarah Johnson</h4>
                    <p className="text-gray-700 dark:text-gray-400">
                      Estudante
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-left">
                <blockquote className="mb-4">
                  <p className="text-gray-700 dark:text-gray-400 italic">
                    "A rádio da escola é uma ótima maneira de me manter
                    conectado com a comunidade. Sempre sintonizo para obter as
                    últimas atualizações sobre eventos e atividades."
                  </p>
                </blockquote>
                <div className="flex items-center">
                  <img
                    src="/neusadomit.jpg"
                    alt="Testimonial 2"
                    className="rounded-full w-12 h-12 mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-bold">Michael Lee</h4>
                    <p className="text-gray-700 dark:text-gray-400">
                      Estudante
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-left">
                <blockquote className="mb-4">
                  <p className="text-gray-700 dark:text-gray-400 italic">
                    "A rádio da escola é uma plataforma fantástica para nossos
                    alunos mostrarem seus talentos e compartilharem suas paixões
                    com a comunidade."
                  </p>
                </blockquote>
                <div className="flex items-center">
                  <img
                    src="/neusadomit.jpg"
                    alt="Testimonial 3"
                    className="rounded-full w-12 h-12 mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-bold">Emily Davis</h4>
                    <p className="text-gray-700 dark:text-gray-400">
                      Professora
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div id="contact" className="bg-gray-900 text-white py-8 px-6 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Entre em contato</h3>
            <p className="text-gray-400 mb-2" id="contato">
              Rádio ativa Neusa Domit
              <br />
              R. Wilson Alves, 680
              <br />
              São Braz, União da Vitória - PR
            </p>
            <p className="text-gray-400 mb-2">
              Telefone: (42) 9 9999 - 9999
              <br />
              Email: neusadomit@gmail.com
            </p>
            <div className="flex gap-4 mt-4">
              <Link
                href="https://www.facebook.com/profile.php?id=100038215399010"
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
            </div>
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
              Acesse a rádio ativa RAND
            </h3>
            <p className="text-gray-400 mb-4">
              Fique ligado diariamente em nossa programação!
            </p>
            <div className="flex gap-2">
              <Link href="/radio">
                <Button className="text-slate-950 font-bold bg-white hover:bg-white">
                  Conectar com a rádio
                </Button>
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

function RadioReceiverIcon(props: any) {
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
      <path d="M5 16v2" />
      <path d="M19 16v2" />
      <rect width="20" height="8" x="2" y="8" rx="2" />
      <path d="M18 12h0" />
    </svg>
  );
}

function TwitterIcon(props: any) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
