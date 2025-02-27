import Carrousel from "@/ui/components/carrousel/carrousel";
import SwiperCardPromo from "@/ui/components/swiperCardsPromo/swiperCardPromo";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 text-textDarkBlue-100 flex flex-col items-center">

      {/* Carrousel principal*/}
      <div className="w-full">
        <Carrousel />
      </div>

      {/* Container texto e video*/}
      <div className="w-full flex flex-col items-center p-4">         
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 p-8 max-w-5xl bg-white shadow-lg rounded-xl mt-12">
          {/* Texto */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-blue-800">
              Venha conhecer as praias do Nordeste
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              O Nordeste brasileiro é famoso por suas praias paradisíacas, com águas cristalinas, areia branca e coqueirais que formam cenários inesquecíveis. Lugares como Jericoacoara, Porto de Galinhas e Morro de São Paulo são destinos perfeitos para quem busca tranquilidade e belezas naturais únicas.
            </p>
          </div>

          {/* Vídeo do YouTube */}
          <div className="w-full md:w-1/2">
            <iframe
              className="w-full h-64 md:h-80 rounded-lg shadow-md transition-transform transform hover:scale-105"
              src="https://www.youtube.com/embed/T90rYD4TPYU?autoplay=1&mute=1&loop=1&playlist=T90rYD4TPYU"
              title="Praias do Nordeste"
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Container vendas de produtos*/}
      <div className="flex flex-col items-center p-4 w-full mx-4">
        <div className="w-full mt-12 mb-12 pt-12 pb-12 px-8 text-center max-w-5xl bg-white shadow-lg rounded-xl">
          <h2 className="text-blue-800 text-3xl font-semibold">
            Conheça nossos principais passeios
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Aproveite ofertas exclusivas e descubra experiências inesquecíveis para sua próxima aventura.
          </p>

          <div className="w-full mt-6">
            <SwiperCardPromo />
          </div>
        </div>
      </div>

    </div>
  );
}
