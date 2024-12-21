import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FeaturesProps {
  formData: any;
  actualizarFormData: (data: Partial<typeof formData>) => void;
}

export function Features({ formData, actualizarFormData }: FeaturesProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="superficie">Superficie (m²)</Label>
          <Input
            id="superficie"
            type="number"
            value={formData.superficie}
            onChange={(e) => actualizarFormData({ superficie: e.target.value })}
            placeholder="Ingresa la superficie"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="habitaciones">Habitaciones</Label>
          <Input
            id="habitaciones"
            type="number"
            value={formData.habitaciones}
            onChange={(e) => actualizarFormData({ habitaciones: e.target.value })}
            placeholder="Número de habitaciones"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="banos">Baños</Label>
        <Input
          id="banos"
          type="number"
          value={formData.banos}
          onChange={(e) => actualizarFormData({ banos: e.target.value })}
          placeholder="Número de baños"
        />
      </div>
    </div>
  );
}
