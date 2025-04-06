import { Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre a LojaPet</h3>
            <p className="text-blue-200">
              Sua loja completa de produtos para pets, oferecendo o melhor para seu companheiro de quatro patas.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/produtos" className="text-blue-200 hover:text-white">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-blue-200 hover:text-white">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-blue-200 hover:text-white">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-blue-200 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-blue-200">
              <li>Rua dos Pets, 123</li>
              <li>São Paulo, SP</li>
              <li>Tel: (11) 1234-5678</li>
              <li>Email: contato@lojapet.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-blue-200 hover:text-white">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-200">
          <p>&copy; 2024 LojaPet. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}