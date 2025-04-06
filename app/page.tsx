import { Dog, Cat, Wrench } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="text-center px-4">
        <div className="flex justify-center items-center gap-4 mb-8">
          <Dog className="w-16 h-16 text-blue-600 animate-bounce" />
          <Cat className="w-16 h-16 text-blue-600 animate-bounce delay-100" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Site em Construção
        </h1>
        <div className="flex items-center justify-center gap-2 text-xl text-blue-700 mb-6">
          <Wrench className="w-6 h-6 animate-spin" />
          <span>Voltaremos em breve!</span>
        </div>
        <p className="text-blue-600 max-w-md mx-auto">
          Estamos trabalhando para trazer o melhor para seu pet.
          Aguarde novidades!
        </p>
      </div>
    </div>
  )
}