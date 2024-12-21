'use client'

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { Steps } from "./steps";
// import { InformacionBasica } from "./informacion-basica";
// import { Caracteristicas } from "./caracteristicas";
// import { Ubicacion } from "./ubicacion";
// import { Fotos } from "./fotos";
// import { Resumen } from "./resumen";
import { BasicInformation } from "./BasicInformation";
import { Features } from "./Features";
import { Steps } from "./Steps";
import { Photos } from "./Photos";
import { Summary } from "./Summary";
import { Location } from "./Location";

const pasos = [
  { id: 'informacion-basica', titulo: 'Información Básica' },
  { id: 'caracteristicas', titulo: 'Características' },
  { id: 'ubicacion', titulo: 'Ubicación' },
  { id: 'fotos', titulo: 'Fotos' },
  { id: 'resumen', titulo: 'Resumen' },
];

export default function PublishPropertyForm() {
  const [pasoActual, setPasoActual] = useState(0);
  const [formData, setFormData] = useState({
    tipoPropiedad: '',
    tipoOperacion: '',
    precio: '',
    superficie: '',
    habitaciones: '',
    banos: '',
    descripcion: '',
    direccion: '',
    ciudad: '',
    codigoPostal: '',
    fotos: [],
  });

  const actualizarFormData = (data: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const siguientePaso = () => {
    if (pasoActual < pasos.length - 1) {
      setPasoActual(pasoActual + 1);
    }
  };

  const pasoAnterior = () => {
    if (pasoActual > 0) {
      setPasoActual(pasoActual - 1);
    }
  };

  const renderizarPasoActual = () => {
    switch (pasos[pasoActual].id) {
      case 'informacion-basica':
        return <BasicInformation formData={formData} actualizarFormData={actualizarFormData} />;
      case 'caracteristicas':
        return <Features formData={formData} actualizarFormData={actualizarFormData} />;
      case 'ubicacion':
        return <Location formData={formData} actualizarFormData={actualizarFormData} />;
      case 'fotos':
        return <Photos formData={formData} actualizarFormData={actualizarFormData} />;
      case 'resumen':
        return <Summary formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="p-6">
        <Steps pasos={pasos} pasoActual={pasoActual} />
        <div className="mt-8">
          {renderizarPasoActual()}
        </div>
        <div className="mt-8 flex justify-between">
          <Button
            onClick={pasoAnterior}
            disabled={pasoActual === 0}
            variant="outline"
          >
            Anterior
          </Button>
          <Button
            onClick={siguientePaso}
            disabled={pasoActual === pasos.length - 1}
          >
            {pasoActual === pasos.length - 2 ? 'Finalizar' : 'Siguiente'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}