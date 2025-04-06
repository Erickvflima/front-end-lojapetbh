"use client"

import { ShoppingCart, Menu, Search, Heart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-lg font-semibold">
                Início
              </Link>
              <Link href="/produtos" className="text-lg">
                Produtos
              </Link>
              <Link href="/sobre" className="text-lg">
                Sobre
              </Link>
              <Link href="/contato" className="text-lg">
                Contato
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="hidden md:block">
            <h1 className="text-2xl font-bold text-blue-600">LojaPet</h1>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-lg font-semibold text-blue-950 hover:text-blue-600">
              Início
            </Link>
            <Link href="/produtos" className="text-lg text-blue-950 hover:text-blue-600">
              Produtos
            </Link>
            <Link href="/sobre" className="text-lg text-blue-950 hover:text-blue-600">
              Sobre
            </Link>
            <Link href="/contato" className="text-lg text-blue-950 hover:text-blue-600">
              Contato
            </Link>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end gap-4">
          {isSearchOpen ? (
            <div className="flex-1 md:max-w-sm">
              <Input
                type="search"
                placeholder="Buscar produtos..."
                className="md:w-[300px]"
              />
            </div>
          ) : null}
          <Button
            variant="ghost"
            size="icon"
            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
          >
            <Heart className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}