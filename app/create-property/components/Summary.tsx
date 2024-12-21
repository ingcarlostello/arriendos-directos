import { Button } from "@/components/ui/button";
// import { toast } from "@/components/ui/use-toast";

interface ResumenProps {
  formData: any;
}

export function Summary({ formData }: ResumenProps) {
  const handleSubmit = async () => {
    // Aquí iría la lógica para enviar los datos al servidor
    console.log("Datos de la propiedad:", formData);
    // toast({
    //   title: "Propiedad publicada",
    //   description: "Tu propiedad ha sido publicada exitosamente.",
    // });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Resumen de la Propiedad</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-semibold">Tipo de Propiedad:</p>
          <p>{formData.tipoPropiedad}</p>
        </div>
        <div>
       <p className="font-semibold">Tipo de Operación:</p>
          <p>{formData.tipoOperacion}</p>
        </div>
        <div>
          <p className="font-semibold">Precio:</p>
          <p>{formData.precio} CLP</p>
        </div>
        <div>
          <p className="font-semibold">Superficie:</p>
          <p>{formData.superficie} m²</p>
        </div>
        <div>
          <p className="font-semibold">Habitaciones:</p>
          <p>{formData.habitaciones}</p>
        </div>
        <div>
          <p className="font-semibold">Baños:</p>
          <p>{formData.banos}</p>
        </div>
        <div>
          <p className="font-semibold">Dirección:</p>
          <p>{formData.direccion}</p>
        </div>
        <div>
          <p className="font-semibold">Ciudad:</p>
          <p>{formData.ciudad}</p>
        </div>
        <div>
          <p className="font-semibold">Código Postal:</p>
          <p>{formData.codigoPostal}</p>
        </div>
      </div>
      <div>
        <p className="font-semibold">Descripción:</p>
        <p>{formData.descripcion}</p>
      </div>
      <div>
        <p className="font-semibold">Fotos:</p>
        <p>{formData.fotos.length} foto(s) adjunta(s)</p>
      </div>
      <Button onClick={handleSubmit} className="w-full">Publicar Propiedad</Button>
    </div>
  );
}

