import Carrousel from "@/ui/components/carrousel/carrousel";

export default function Home() {
  return (
    <div className="bg-background text-textDarkBlue-100 flex flex-col items-center pt-4">

      <div className="w-full px-4">
        <Carrousel />
      </div>
      

      {/* Conteúdo extra abaixo do carrossel */}
      <div className="mt-10 p-6 text-center">
        <h2 className="text-2xl font-semibold">Explore Mais</h2>
        <p className="text-lg text-gray-600 mt-2">
          Descubra destinos incríveis ao redor do mundo!
        </p>
      </div>
    </div>
  );
}
