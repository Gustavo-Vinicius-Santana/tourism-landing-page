import Image from "next/image";
import Head from "next/head";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre Nós - Turismo no Nordeste | Descubra João Pessoa, Natal e Recife</title>
        <meta
          name="description"
          content="Saiba mais sobre nossa missão de conectar viajantes a experiências incríveis em João Pessoa, Natal, Recife e outros destinos do Nordeste brasileiro."
        />
        <meta name="keywords" content="Turismo no Nordeste, viagens João Pessoa, passeios Natal, Recife turismo" />
        <meta name="author" content="Sua Empresa de Turismo" />
      </Head>

      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8 bg-gradient-to-b from-blue-50 to-blue-100">
        
        <article className="flex flex-col md:flex-row items-center justify-between gap-12 p-8 max-w-5xl bg-white shadow-lg rounded-xl">
          
          {/* Texto */}
          <div className="md:w-1/2 text-center md:text-left p-6">
            <h1 className="text-3xl font-bold text-blue-800 mb-4">Sobre Nós</h1>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">
              Conectando você aos melhores destinos do Nordeste
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Somos apaixonados por turismo e dedicados a proporcionar <strong>experiências inesquecíveis</strong>. 
              Nossa missão é conectar viajantes a <strong>João Pessoa, Natal, Recife</strong> e outras maravilhas do Nordeste, 
              garantindo aventuras autênticas e memoráveis. 
            </p>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Descubra praias paradisíacas, cultura vibrante e passeios exclusivos conosco.
            </p>
          </div>

          {/* Imagem */}
          <div className="md:w-1/2 flex justify-center">
            <Image 
              src="/praia1.jpg" 
              alt="Vista paradisíaca de uma praia do Nordeste" 
              width={500} 
              height={500} 
              className="rounded-lg shadow-md"
            />
          </div>

        </article>

      </section>
    </>
  );
}