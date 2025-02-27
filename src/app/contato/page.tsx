import Head from "next/head";
import { FaWhatsapp, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Contato() {
    return (
        <>
            <Head>
                <title>Contato | Nome da Empresa</title>
                <meta name="description" content="Entre em contato com a Nome da Empresa por WhatsApp, e-mail, Instagram ou telefone. Confira nosso endereço e redes sociais." />
                <meta name="keywords" content="contato, telefone, e-mail, endereço, suporte, Nome da Empresa, fale conosco" />
                <meta name="author" content="Nome da Empresa" />
                <meta property="og:title" content="Contato | Nome da Empresa" />
                <meta property="og:description" content="Fale conosco por WhatsApp, e-mail, Instagram ou telefone. Confira nosso endereço e redes sociais." />
                <meta property="og:type" content="website" />
            </Head>

            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6">
                <div className="bg-white shadow-lg rounded-2xl p-12 w-full max-w-4xl text-center">
                    <h1 className="text-3xl font-bold text-blue-800 mb-6">Entre em Contato</h1>
                    <p className="text-gray-600 mb-6 text-lg">
                        Siga-nos nas redes sociais ou entre em contato diretamente:
                    </p>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-6 sm:gap-12 text-gray-700">
                        <div className="flex flex-col items-center">
                            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" aria-label="Fale conosco pelo WhatsApp">
                                <FaWhatsapp className="text-green-500 text-4xl sm:text-5xl" />
                            </a>
                            <span className="text-sm sm:text-base text-gray-600 mt-2">+55 11 99999-9999</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <a href="mailto:seuemail@gmail.com" aria-label="Envie um e-mail">
                                <FaEnvelope className="text-red-500 text-4xl sm:text-5xl" />
                            </a>
                            <span className="text-sm sm:text-base text-gray-600 mt-2">seuemail@gmail.com</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <a href="https://instagram.com/seuinstagram" target="_blank" rel="noopener noreferrer" aria-label="Nos siga no Instagram">
                                <FaInstagram className="text-pink-500 text-4xl sm:text-5xl" />
                            </a>
                            <span className="text-sm sm:text-base text-gray-600 mt-2">@seuinstagram</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <a href="tel:+5511999999999" aria-label="Ligue para nós">
                                <FaPhone className="text-blue-500 text-4xl sm:text-5xl" />
                            </a>
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
                            aria-label="Ver localização no Google Maps"
                        >
                            Ver no Google Maps
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}