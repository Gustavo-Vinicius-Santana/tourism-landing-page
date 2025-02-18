import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8 mt-12 shadow-lg">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            {/* Informações principais */}
            <div className="text-center md:text-left">
              <h2 className="text-lg font-semibold">Entre em Contato</h2>
              <p className="text-sm text-gray-400">Fale comigo para mais informações sobre o projeto.</p>
            </div>

            {/* Links de Contato */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
              <a href="mailto:seuemail@example.com" className="flex items-center space-x-2 hover:text-gray-400 transition">
                <FaEnvelope className="w-5 h-5" />
                <span>endereco@gmail.com</span>
              </a>
              <a href="https://www.instagram.com/seuusuario" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-gray-400 transition">
                <FaInstagram className="w-5 h-5" />
                <span>@seu_usuario</span>
              </a>
              <a href="https://wa.me/5521999999999" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-gray-400 transition">
                <FaWhatsapp className="w-5 h-5" />
                <span>+55 21 9999-9999</span>
              </a>
            </div>
        </div>
      </footer>
    );
  }