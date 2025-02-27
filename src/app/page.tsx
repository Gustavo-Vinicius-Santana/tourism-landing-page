import Carrousel from "@/ui/components/carrousel/carrousel";
import SwiperCardPromo from "@/ui/components/swiperCardsPromo/swiperCardPromo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 text-textDarkBlue-100 flex flex-col items-center">
      
      {/* Carrousel principal */}
      <section className="w-full" aria-labelledby="carrousel-title">
        <h1 id="carrousel-title" className="sr-only">
          Turismo no Nordeste: Descubra os melhores destinos
        </h1>
        <Carrousel />
      </section>

      {/* Container texto e vídeo */}
      <section className="w-full flex flex-col items-center p-4">
        <article className="flex flex-col md:flex-row items-center justify-between gap-12 p-8 max-w-5xl bg-white shadow-lg rounded-xl mt-12">
          
          {/* Texto */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-blue-800">
              Explore as praias paradisíacas do Nordeste
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              O Nordeste brasileiro é um destino turístico repleto de praias deslumbrantes, águas cristalinas e coqueirais que formam paisagens inesquecíveis. Descubra destinos incríveis como João Pessoa, Natal, Recife e Campina Grande.
            </p>
          </div>

          {/* Vídeo do YouTube */}
          <div className="w-full md:w-1/2">
            <iframe
              className="w-full h-64 md:h-80 rounded-lg shadow-md transition-transform transform hover:scale-105"
              src="https://www.youtube.com/embed/T90rYD4TPYU?autoplay=1&mute=1&loop=1&playlist=T90rYD4TPYU"
              title="Conheça as melhores praias do Nordeste"
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>
        </article>
      </section>

      {/* Container de passeios e pacotes */}
      <section className="flex flex-col items-center p-4 w-full mx-4">
        <article className="w-full mt-12 mb-12 pt-12 pb-12 px-8 text-center max-w-5xl bg-white shadow-lg rounded-xl">
          <h2 className="text-blue-800 text-3xl font-semibold">
            Passeios imperdíveis em João Pessoa, Natal e Recife
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Aproveite ofertas exclusivas e descubra experiências inesquecíveis com nossos pacotes de turismo.
          </p>

          <div className="w-full mt-6">
            <SwiperCardPromo />
            <Link href="/pacotes">
              <button
                className="mt-4 px-6 py-3 bg-blue-500 text-white text-base font-medium rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                title="Veja todos os pacotes de turismo disponíveis"
              >
                Ver mais
              </button>
            </Link>
          </div>
        </article>
      </section>

    </div>
  );
}