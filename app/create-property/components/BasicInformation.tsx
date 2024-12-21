import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface BasicInformationProps {
  formData: any;
  actualizarFormData: (data: Partial<typeof formData>) => void;
}

export function BasicInformation({ formData, actualizarFormData }: BasicInformationProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="tipoPropiedad">Tipo de Propiedad</Label>
          <Select
            value={formData.tipoPropiedad}
            onValueChange={(value) => actualizarFormData({ tipoPropiedad: value })}
          >
            <SelectTrigger id="tipoPropiedad">
              <SelectValue placeholder="Selecciona el tipo de propiedad" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="casa">Casa</SelectItem>
              <SelectItem value="departamento">Departamento</SelectItem>
              <SelectItem value="oficina">Oficina</SelectItem>
              <SelectItem value="terreno">Terreno</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="tipoOperacion">Tipo de Operación</Label>
          <Select
            value={formData.tipoOperacion}
            onValueChange={(value) => actualizarFormData({ tipoOperacion: value })}
          >
            <SelectTrigger id="tipoOperacion">
              <SelectValue placeholder="Selecciona el tipo de operación" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="venta">Venta</SelectItem>
              <SelectItem value="arriendo">Arriendo</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="precio">Precio (CLP)</Label>
        <Input
          id="precio"
          type="number"
          value={formData.precio}
          onChange={(e) => actualizarFormData({ precio: e.target.value })}
          placeholder="Ingresa el precio"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="descripcion">Descripción</Label>
        <Textarea
          id="descripcion"
          value={formData.descripcion}
          onChange={(e) => actualizarFormData({ descripcion: e.target.value })}
          placeholder="Describe tu propiedad"
          rows={4}
        />
      </div>
    </div>
  );
}

