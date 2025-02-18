import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-gray-900 text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-2xl font-bold">Meu Site</h1>
                </Link>
                
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/" className="hover:text-gray-400">Home</Link>
                        </li>
                        <li>
                            <Link href="/pacotes" className="hover:text-gray-400">Pacotes</Link>
                        </li>
                        <li>
                            <Link href="/sobre" className="hover:text-gray-400">Sobre</Link>
                        </li>
                        <li>
                            <Link href="/contato" className="hover:text-gray-400">Contato</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
  }