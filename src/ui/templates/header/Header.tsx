import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-contentBackground text-textDarkBlue-100 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-2xl font-bold">Meu Site</h1>
                </Link>
                
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/" className="hover:text-textYellow-700">Home</Link>
                        </li>
                        <li>
                            <Link href="/pacotes" className="hover:text-textYellow-700">Pacotes</Link>
                        </li>
                        <li>
                            <Link href="/sobre" className="hover:text-textYellow-700">Sobre</Link>
                        </li>
                        <li>
                            <Link href="/contato" className="hover:text-textYellow-700">Contato</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
  }