"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from 'react'
import backgroundHero from "../../public/element-apartments.png"
import Image from 'next/image'

const HeroSection = () => {
    const [tipoOperacion, setTipoOperacion] = useState<'venta' | 'arriendo'>('venta')
    const [tipoPropiedad, setTipoPropiedad] = useState("todas")
    const [ubicacion, setUbicacion] = useState("")
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px] w-full">
        <Image
          src={backgroundHero}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl text-white font-bold text-center mb-8">
            Lo mejor de buscar es encontrar
          </h1>

          {/* Search Section */}
          <div className="w-full max-w-3xl bg-white rounded-lg p-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              {/* Tipo de Operación */}
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant={tipoOperacion === "venta" ? "default" : "outline"}
                  onClick={() => setTipoOperacion("venta")}
                  className="w-full"
                >
                  Venta
                </Button>
                <Button
                  variant={tipoOperacion === "arriendo" ? "default" : "outline"}
                  onClick={() => setTipoOperacion("arriendo")}
                  className="w-full"
                >
                  Arriendo
                </Button>
              </div>

              {/* Search Controls */}
              <div className="flex flex-col md:flex-row gap-2">
                <Select value={tipoPropiedad} onValueChange={setTipoPropiedad}>
                  <SelectTrigger className="w-full md:w-[200px]">
                    <SelectValue placeholder="Tipo de propiedad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todas">Todas las propiedades</SelectItem>
                    <SelectItem value="casa">Casa</SelectItem>
                    <SelectItem value="departamento">Departamento</SelectItem>
                    <SelectItem value="oficina">Oficina</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex-1 relative">
                  <Input
                    placeholder="Busca por ubicación"
                    value={ubicacion}
                    onChange={(e) => setUbicacion(e.target.value)}
                    className="w-full"
                  />
                  <Button
                    className="absolute right-0 top-0 bottom-0"
                    size="icon"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
