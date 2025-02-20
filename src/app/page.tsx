import Carrousel from "@/ui/components/carrousel/carrousel";
import SwiperCardPromo from "@/ui/components/swiperCardsPromo/swiperCardPromo";

export default function Home() {
  return (
    <div className="bg-background text-textDarkBlue-100 flex flex-col items-center pt-4">

    <div className="w-full px-4">
      <Carrousel />
    </div>

    <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-6 max-w-5xl mx-auto">
      {/* Texto */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl font-bold text-blue-900">
          Venha conhecer as praias do Nordeste
        </h2>
        <p className="mt-4 text-gray-700">
          O Nordeste brasileiro é famoso por suas praias paradisíacas, com águas cristalinas, areia branca e coqueirais que formam cenários inesquecíveis. Lugares como Jericoacoara, Porto de Galinhas e Morro de São Paulo são destinos perfeitos para quem busca tranquilidade e belezas naturais únicas.
        </p>
      </div>

      {/* Vídeo do YouTube */}
      <div className="w-full md:w-1/2">
        <iframe
          className="w-full h-64 md:h-80 rounded-lg"
          src="https://www.youtube.com/embed/T90rYD4TPYU?autoplay=1&mute=1&loop=1&playlist=T90rYD4TPYU"
          title="Praias do Nordeste"
          allow="autoplay"
          allowFullScreen
        ></iframe>
      </div>
    </div>

    {/* Conteúdo extra abaixo do carrossel */}
    <div className="w-full mt-10 p-6 text-center">
      <h2 className="text-textYellow-500 text-2xl font-semibold">
        Conheça nossos principais passeios
      </h2>

      <div className="w-full max-w-5xl mx-auto">
        <SwiperCardPromo />
      </div>
    </div>
    </div>
  );
}
