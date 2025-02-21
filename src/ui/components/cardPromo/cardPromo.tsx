import Image from "next/image";


interface CardPromoProps {
    titulo: string;
    descricao: string;
    preco: string;
    imagem: string;
  }

export default function CardPromo({ titulo, descricao, preco, imagem }: CardPromoProps) {

    const nomeGuia = "Gustavo";
    const numero = "5583988082293"
    const mensagem = `Olá ${nomeGuia}, vi no site o passeio ${titulo} e estou enteressado(a)`;

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-[300px] h-[450px] transition-transform transform hover:scale-105">
            <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
                <Image 
                    src={imagem} 
                    alt="Praia" 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-lg"
                />
            </div>

            <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{titulo}</h3>
            </div>

            <div className="mt-4">
                <p className="text-sm text-gray-600">{descricao}</p>
            </div>

            <div className="mt-4 flex items-center justify-between">
                <p className="text-lg font-semibold text-green-500">R$ {preco}</p>
                <a href={`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`}>
                    <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors">
                        Reservar
                    </button>
                </a>
            </div>
        </div>
    )
}