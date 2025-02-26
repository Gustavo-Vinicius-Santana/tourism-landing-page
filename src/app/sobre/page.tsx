import Image from "next/image";

export default function Sobre() {
    return (
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8 bg-gray-100">

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 p-8 max-w-5xl bg-white shadow-lg rounded-xl">
          {/* Texto */}
          <div className="md:w-1/2 text-center md:text-left p-6 gb-white">
            <h1 className="text-3xl font-bold text-blue-800 mb-4">Sobre Nós</h1>
            <p className="text-gray-600 text-lg">
              Somos apaixonados por turismo e dedicados a proporcionar experiências inesquecíveis. 
              Nossa missão é conectar viajantes a destinos incríveis, garantindo aventuras autênticas 
              e memoráveis. Descubra o mundo conosco e viva momentos únicos!
            </p>
          </div>
          {/* Imagem */}
          <div className="md:w-1/2 flex justify-center">
            <Image src="/praia1.jpg" alt="Sobre" width={500} height={500} className="rounded-lg"/>
          </div>
        </div>

      </div>
    );
  }