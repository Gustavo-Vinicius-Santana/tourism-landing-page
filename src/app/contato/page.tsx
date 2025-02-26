import { FaWhatsapp, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Contato() {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-2xl p-12 w-full max-w-4xl text-center">
                <h1 className="text-3xl font-bold text-blue-800 mb-6">Entre em Contato</h1>
                <p className="text-gray-600 mb-6 text-lg">
                Siga-nos nas redes sociais ou entre em contato diretamente:
                </p>
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-6 sm:gap-12 text-gray-700">
                    <div className="flex flex-col items-center">
                        <FaWhatsapp className="text-green-500 text-4xl sm:text-5xl" />
                        <span className="text-sm sm:text-base text-gray-600 mt-2">+55 11 99999-9999</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaEnvelope className="text-red-500 text-4xl sm:text-5xl" />
                        <span className="text-sm sm:text-base text-gray-600 mt-2">seuemail@gmail.com</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaInstagram className="text-pink-500 text-4xl sm:text-5xl" />
                        <span className="text-sm sm:text-base text-gray-600 mt-2">@seuinstagram</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaPhone className="text-blue-500 text-4xl sm:text-5xl" />
                        <span className="text-sm sm:text-base text-gray-600 mt-2">+55 11 99999-9999</span>
                    </div>
                </div>

                <div className="mt-8 text-gray-600 text-lg">
                    <p className="font-semibold">Endereço:</p>
                    <p>Rua Exemplo, 123 - Cidade, Estado</p>
                </div>
                <div className="mt-4">
                    <a
                        href="https://maps.google.com/?q=Rua+Exemplo,123"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline text-lg"
                    >
                        Ver no Google Maps
                    </a>
                </div>
            </div>
        </div>
    );
}