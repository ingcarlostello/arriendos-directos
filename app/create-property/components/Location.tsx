import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LocationProps {
  formData: any;
  actualizarFormData: (data: Partial<typeof formData>) => void;
}

export function Location({ formData, actualizarFormData }: LocationProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="direccion">Dirección</Label>
        <Input
          id="direccion"
          value={formData.direccion}
          onChange={(e) => actualizarFormData({ direccion: e.target.value })}
          placeholder="Ingresa la dirección"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="ciudad">Ciudad</Label>
          <Input
            id="ciudad"
            value={formData.ciudad}
            onChange={(e) => actualizarFormData({ ciudad: e.target.value })}
            placeholder="Ingresa la ciudad"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="codigoPostal">Código Postal</Label>
          <Input
            id="codigoPostal"
            value={formData.codigoPostal}
            onChange={(e) => actualizarFormData({ codigoPostal: e.target.value })}
            placeholder="Ingresa el código postal"
          />
        </div>
      </div>
    </div>
  );
}
